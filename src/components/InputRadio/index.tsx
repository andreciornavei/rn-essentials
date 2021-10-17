import React from "react"
import Ripple from "react-native-advanced-ripple"
import { Text, View } from "react-native"
import { createStyle } from "./styles"
import { Icon } from "../Icon"
import { FlatList } from "react-native-gesture-handler"
import _ from "lodash"
import { IconPackType, useTheme } from "../.."

interface Props {
    options: Array<Option>
    value?: any[][]
    textColor?: string
    textSize?: number
    textMargin?: number
    textItalic?: boolean
    disabled?: boolean
    virtualized?: boolean
    renderLastLine?: boolean
    renderFirstLine?: boolean
    onSelect: (value: string | number, selected: boolean) => void
}

interface Option {
    value: string | number
    label: string
    iconPack?: IconPackType
    iconName?: string
    iconSize?: number
}

export const InputRadio = ({
    options = [],
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

    const parse_value = {}
    for (const i of _.get(props, "value", [])) {
        _.set(parse_value, i[0], i[1])
    }

    const renderRadioItem = (item: Option, index: number): JSX.Element => {
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
                onPress={() => {
                    props.onSelect(
                        item.value,
                        _.get(parse_value, item.value, false) == true ? false : true
                    )
                }}
            >
                {(item.iconPack && item.iconName) && (
                    <Icon
                        pack={item.iconPack}
                        name={item.iconName}
                        size={item.iconSize || textSize}
                        color={_.get(parse_value, item.value, false) ? theme.color.accentText : textColor}
                        style={{ marginRight: 15 }}
                    />
                )}
                <Text style={[
                    styles.selectionValue,
                    {
                        fontSize: textSize,
                        fontStyle: props.textItalic ? "italic" : "normal",
                        marginLeft: props.textMargin ?? 0,
                        color: _.get(parse_value, item.value, false) ? theme.color.accentText : textColor
                    }
                ]}>{item.label}</Text>
                {_.get(parse_value, item.value, false) && <Icon pack="Feather" name="check" size={textSize ?? 14} color={theme.color.accentText} />}
            </Ripple>
        )
    }

    if (virtualized) {
        return (
            <FlatList
                data={options}
                keyExtractor={(_, index) => `option-${index}`}
                ItemSeparatorComponent={_ => <View style={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    height: 1
                }} />}
                renderItem={({ item, index }: { item: Option, index: number }) => renderRadioItem(item, index)}
            />
        )
    } else {
        return (
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
        )
    }
}