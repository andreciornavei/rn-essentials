import React from "react"
import _ from "lodash"
import { View } from "react-native"
import { createStyle } from "./styles"
import { FlatList } from "react-native-gesture-handler"
import { Button, useTheme } from "../.."
import { InputRadioMultipleValue, InputRadioOption, InputRadioSingleValue, InputRadioProps } from "./types"




export const InputRadio = ({
    disabled = false,
    renderFirstLine = false,
    renderLastLine = true,
    virtualized = false,
    ...props
}: InputRadioProps): JSX.Element => {

    const theme = useTheme()
    const styles = createStyle(theme)
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
        const selected = isSelected(item)
        return (
            <Button
                key={`option-idx-${index}`}
                label={item.label}
                disabled={disabled}
                onPress={() => handleCallback(item)}
                {...(selected ? props.selectedOptions : props.unselectedOptions)}
                leftImage={item.leftImage||selected ? props.selectedOptions?.leftImage : props.unselectedOptions?.leftImage}
                leftIcon={item.leftIcon ? item.leftIcon : (selected ? props.selectedOptions?.leftIcon : props.unselectedOptions?.leftIcon)}
                rightImage={item.rightImage || selected ? props.selectedOptions?.rightImage : props.unselectedOptions?.rightImage}
                rightIcon={item.rightIcon ? item.rightIcon : selected ? props.selectedOptions?.rightIcon : props.unselectedOptions?.rightIcon}
                containerStyle={{ marginTop: props.space || 0 }}
            />
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