import React from "react"
import { View, Text } from "react-native"
import { useTheme } from "../.."
import { styles } from "./styles"

interface Props {
    message: string,
    padding?: number
}

export const Empty = (props: Props): JSX.Element => {

    const theme = useTheme()

    return (
        <View style={styles.container}>
            <Text style={[styles.text, {
                color: theme.color.gray,
                paddingVertical: props.padding || 50
            }]}>
                {props.message}
            </Text>
        </View>
    )
}