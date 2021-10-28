import React from "react"
import { View, Text } from "react-native"
import { MListItemSampleProps } from "."
import { useTheme } from "../../../../../../src/providers/ThemeProvider"

export const MListItemSampleView = (props: MListItemSampleProps): JSX.Element => {
    const theme = useTheme()
    return (
        <View style={{
            marginHorizontal: 25,
            padding: 25,
            backgroundColor: `${theme.color.success}20`,
            borderWidth: 1,
            borderColor: theme.color.success,
            borderRadius: theme.roundSizeBase
        }}>
            <Text style={{
                color: theme.color.success
            }}>
                {props.label}
            </Text>
        </View>
    )
}