import React from "react"
import { View } from "react-native"
import { Accordion, InputRadio, InputRadioSingleValue, useTheme } from "../.."
import { createStyle } from "./styles"
import { InputSelectProps } from "./types"

export const InputSelect = (props: InputSelectProps): JSX.Element => {

    const theme = useTheme()
    const applyProps = { ...theme.components.input_select, ...props }

    const styles = createStyle(theme)
    const [selectedSingleValue, setSelectedSingleValue] = React.useState<InputRadioSingleValue>(props.value ? String(props.value) : undefined)
    const [open, setOpen] = React.useState<boolean>(false)
    const handleSelectValue = (value: InputRadioSingleValue) => {
        setOpen(false)
        setSelectedSingleValue(value)
        props.onSelect && props.onSelect(value)
    }

    return (
        <Accordion
            value={props.options.find((e => e.value == selectedSingleValue))?.label}
            open={open}
            size={applyProps.size}
            shape={applyProps.shape}
            theme={applyProps.theme}
            placeholder={props.placeholder}
            placeholderStrategy={props.placeholderStrategy}
            onClick={() => setOpen((old) => !old)}
            containerStyle={{
                ...applyProps.containerStyle,
                borderBottomLeftRadius: open ? 0 : 8,
                borderBottomRightRadius: open ? 0 : 8,
                borderBottomColor: applyProps.containerStyle?.borderColor || theme.color.dark
            }}
            textStyle={applyProps.textStyle}
            placeholderStyle={applyProps.placeholderStyle}
        >
            <View style={[styles.container, {
                borderColor: applyProps.containerStyle?.borderColor || theme.color.dark
            }]}>
                <InputRadio
                    mode="single"
                    options={props.options}
                    value={selectedSingleValue}
                    onSelect={handleSelectValue}
                    renderLastLine={false}
                    renderFirstLine={false}
                    unselectedOptions={applyProps.unselectedOptions}
                    selectedOptions={applyProps.selectedOptions}
                />
            </View>
        </Accordion>
    )
}