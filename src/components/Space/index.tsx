import React from "react"
import { View } from "react-native"

interface Props {
    height?: number
    width?: number
}

export const Space = (props: Props): JSX.Element => {
    return (
        <View style={props} />
    )
}
