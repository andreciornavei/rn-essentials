import React from "react"
import { useDimensions, useKeyboard } from "@react-native-community/hooks"
import { KeyboardAvoidingView, Platform, View } from "react-native"
import styles from "./styles"

interface Props {
    children: JSX.Element
}

export const AppBottomSheetContent = (props: Props): JSX.Element => {

    const dimensions = useDimensions()
    const { keyboardHeight, keyboardShown } = useKeyboard()

    const desiredHeight = React.useMemo(() => {
        return dimensions.window.height - (keyboardShown == true ? keyboardHeight : 0)
    }, [dimensions, keyboardHeight, keyboardShown])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={[
                styles.wrap,
                { height: dimensions.window.height },
            ]}
        >
            <View style={[
                styles.container,
                { height: desiredHeight }
            ]}>
                {props.children}
            </View>
        </KeyboardAvoidingView>
    )
}
