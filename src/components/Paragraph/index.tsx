import React from "react"
import { Text, TextStyle } from "react-native"
import { useTheme } from "../.."
import { createStyle } from "./styles"

interface Props {
    value: string[]
    align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    style?: TextStyle
}

export const Paragraph = ({ align = "left", ...props }: Props): JSX.Element => {
    const theme = useTheme()
    const styles = createStyle(theme)
    return (
        <Text
            style={[styles.paragraph, props.style, {
                textAlign: align
            }]}
        >
            {props.value.map((v, i) => `${i == 0 ? '' : '\n\n'}${v.trim()}`)}
        </Text>
    )
}