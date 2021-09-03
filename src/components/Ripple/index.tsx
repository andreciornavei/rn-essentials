import React from "react"
import { ViewStyle } from "react-native"
import RippleNative from "react-native-advanced-ripple"

type Props = {
    children: JSX.Element
    containerStyle?: ViewStyle | ViewStyle[]
    duration?: number
    slowDuration?: number
    onPress?: () => void
    disabled?: boolean
}

export const Ripple = (props: Props) => {
    return (
        <RippleNative
            containerStyle={props.containerStyle}
            duration={props.duration || 250}
            slowDuration={props.slowDuration || 250}
            onPress={props.onPress}
            disabled={props.disabled}
        >
            {props.children}
        </RippleNative>
    )
}