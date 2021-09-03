import React from "react"
import { View } from "react-native"
import { useTheme } from "../.."
import styles from "./styles"

interface Props {
    height?: number
    color?: string
}

export const Divider = (props: Props): JSX.Element => {

    const theme = useTheme()

    return (
        <View>
            <View style={[
                styles.container,
                {
                    marginVertical: props.height ? props.height / 2 : 0,
                    backgroundColor: props.color || theme.color.gray
                }
            ]} />
        </View>
    )
}