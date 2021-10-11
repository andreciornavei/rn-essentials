import React from "react"
import { View, Text } from "react-native"
export const TabOne = (): JSX.Element => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f4f4f8"
        }}>
            <Text>Tab One</Text>
        </View>
    )
}