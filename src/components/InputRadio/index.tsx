import React from "react"
import { Text, View } from "react-native"
import { createStyle } from "./styles"
import { Icon } from "../Icon"
import { FlatList } from "react-native-gesture-handler"
import _ from "lodash"
import { IconPackType, Ripple, useTheme } from "../.."
import { ColorValue } from "react-native"

export interface InputRadioOption {
    value: string | number
    label: string
    iconPack?: IconPackType
    iconName?: string
    iconSize?: number
}

interface StyleProps {
    textColor?: ColorValue
    selectedTextColor?: ColorValue
    textSize?: number
    textMargin?: number
    textItalic?: boolean
}

interface BaseProps extends StyleProps {
    options: Array<InputRadioOption>
    disabled?: boolean
    virtualized?: boolean
    renderLastLine?: boolean
    renderFirstLine?: boolean
    loadOptions?: () => Promise<Array<InputRadioOption>>
    onLoadedOptions?: (options: Array<InputRadioOption>) => void
}

export type InputRadioSingleValue = String | number | undefined
export type InputRadioMultipleValue = InputRadioSingleValue[] | undefined

interface SingleProps extends BaseProps {
    mode: "single"
    value?: InputRadioSingleValue
    onSelect: (value: InputRadioSingleValue) => void
}

interface MultipleProps extends BaseProps {
    mode: "multiple"
    value?: InputRadioMultipleValue
    onSelect: (value: InputRadioMultipleValue) => void
}

type Props = SingleProps | MultipleProps

export const InputRadio = ({
    disabled = false,
    textSize = 12,
    renderFirstLine = false,
    renderLastLine = true,
    virtualized = false,
    ...props
}: Props): JSX.Element => {

    const theme = useTheme()
    const styles = createStyle(theme)
    const textColor = props.textColor || theme.color.gray
    const selectedTextColor = props.selectedTextColor || theme.color.accentText

    const [loading, setLoading] = React.useState<boolean>(false)
    const [options, setOptions] = React.useState<Array<InputRadioOption>>(props.options)

    const handleCallback = (option: InputRadioOption) => {
        if (props.mode == "single") {
            props.onSelect(option.value as InputRadioSingleValue)
        } else if (props.mode == "multiple") {
            const current_options = props.value || []
            const optionIndex = current_options.findIndex((_entry) => _entry == option.value)
            if (optionIndex != -1) {
                props.onSelect(current_options.filter((_entry, index) => index != optionIndex))
            } else {
                props.onSelect([...current_options, option.value] as InputRadioMultipleValue)
            }
        }
    }

    const isSelected = (option: InputRadioOption): boolean => {
        if (props.mode == "single") return option.value == props.value
        else if (props.mode == "multiple") return (props.value || []).includes(option.value)
        return false
    }

    React.useEffect(() => {
        props.onLoadedOptions && props.onLoadedOptions(options)
    }, [options])

    React.useEffect(() => {
        if (props.loadOptions) {
            setLoading(true)
            props.loadOptions()
                .then(setOptions)
                .catch(_ => console.log("Error on load options"))
                .finally(() => setLoading(false))
        }
    }, [])

    const renderRadioItem = (item: InputRadioOption, index: number): JSX.Element => {
        return (
            <Ripple
                key={`option-idx-${index}`}
                containerStyle={[
                    styles.selectionContainer,
                    disabled ? { opacity: 0.7 } : {}
                ]}
                disabled={disabled}
                duration={250}
                slowDuration={250}
                onPress={() => handleCallback(item)}
            >
                <>
                    {(item.iconPack && item.iconName) && (
                        <Icon
                            pack={item.iconPack}
                            name={item.iconName}
                            size={item.iconSize || textSize}
                            color={isSelected(item) ? selectedTextColor : textColor}
                            style={{ marginRight: 15 }}
                        />
                    )}
                    <Text style={[
                        styles.selectionValue,
                        {
                            fontSize: textSize,
                            fontStyle: props.textItalic ? "italic" : "normal",
                            marginLeft: props.textMargin ?? 0,
                            color: isSelected(item) ? selectedTextColor : textColor
                        }
                    ]}>{item.label}</Text>
                    {isSelected(item) && <Icon pack="Feather" name="check" size={textSize ?? 14} color={selectedTextColor} />}
                </>
            </Ripple>
        )
    }

    if (virtualized) {
        return React.useMemo(() => (
            <FlatList
                data={options}
                keyExtractor={(_, index) => `option-${index}`}
                ItemSeparatorComponent={_ => <View style={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    height: 1
                }} />}
                renderItem={({ item, index }: { item: InputRadioOption, index: number }) => renderRadioItem(item, index)}
            />
        ), [options, props.value])
    } else {
        return React.useMemo(() => (
            <>
                {options.map((option, index) => {
                    return (
                        <View
                            key={`option-container-${index}`}
                            style={[
                                {
                                    borderTopColor: "rgba(0,0,0,0.05)",
                                    borderBottomColor: "rgba(0,0,0,0.05)",
                                    borderTopWidth: 1
                                },
                                (index == 0 && !renderFirstLine) && { borderTopWidth: 0 },
                                (index == (options.length - 1) && renderLastLine) && { borderBottomWidth: 1 }
                            ]}>
                            {renderRadioItem(option, index)}
                        </View>
                    )
                })}
            </>
        ), [options, props.value])
    }
}