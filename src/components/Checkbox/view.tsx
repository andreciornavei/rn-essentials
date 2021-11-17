import React from "react"
import { Text, View } from "react-native";
import { Ripple, useTheme } from "../..";
import { CheckboxContext } from "./context";
import { createStyle } from "./styles";
import { CheckboxTheme } from "./theme";
import { CheckboxProps } from "./types";
export const CheckboxView = (props: CheckboxProps): JSX.Element => {

    const theme = useTheme()
    const styles = createStyle(theme)
    const checkboxTheme = CheckboxTheme(theme)

    const themeColor = props?.theme || theme?.components?.checkbox?.theme || "primary"
    const themeSize = props?.size || theme?.components?.checkbox?.size || "regular"
    const themeShape = props?.shape || theme?.components?.checkbox?.shape || "flat"

    const wrapperStyle = {
        ...styles?.wrapper,
        ...checkboxTheme?.themes()[themeColor].wrapper,
        ...checkboxTheme?.sizes()[themeSize].wrapper,
        ...checkboxTheme?.shapes()[themeShape].wrapper,
        ...theme?.components?.checkbox?.style?.wrapper,
        ...props?.style?.wrapper
    }

    const checkboxStyle = {
        ...styles?.checkbox,
        ...checkboxTheme?.themes()[themeColor].checkbox,
        ...checkboxTheme?.sizes()[themeSize].checkbox,
        ...checkboxTheme?.shapes()[themeShape].checkbox,
        ...theme?.components?.checkbox?.style?.checkbox,
        ...props?.style?.checkbox,
        ...props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
    }

    const indicatorStyle = {
        ...styles?.indicator,
        ...checkboxTheme?.themes()[themeColor].indicator,
        ...checkboxTheme?.sizes()[themeSize].indicator,
        ...checkboxTheme?.shapes()[themeShape].indicator,
        ...theme?.components?.checkbox?.style?.indicator,
        ...props?.style?.indicator,
        ...props.color ? { backgroundColor: props.color } : {}
    }

    const labelContainerStyle = {
        ...styles?.label_container,
        ...checkboxTheme?.themes()[themeColor].label_container,
        ...checkboxTheme?.sizes()[themeSize].label_container,
        ...checkboxTheme?.shapes()[themeShape].label_container,
        ...theme?.components?.checkbox?.style?.label_container,
        ...props?.style?.label_container
    }

    const labelStyle = {
        ...styles?.label,
        ...checkboxTheme?.themes()[themeColor].label,
        ...checkboxTheme?.sizes()[themeSize].label,
        ...checkboxTheme?.shapes()[themeShape].label,
        ...theme?.components?.checkbox?.style?.label,
        ...props?.style?.label
    }

    const {
        realChecked,
        handleOnPress,
    } = React.useContext(CheckboxContext)

    return (
        <View style={wrapperStyle}>
            <Ripple
                containerStyle={checkboxStyle}
                onPress={handleOnPress}>
                <View
                    style={[
                        indicatorStyle,
                        {
                            backgroundColor: realChecked
                                ? indicatorStyle.backgroundColor
                                : props.unselectedColor || theme.color.light,
                        },
                    ]}
                />
            </Ripple>
            {props.label && (
                <Ripple
                    containerStyle={labelContainerStyle}
                    duration={250}
                    slowDuration={250}
                    onPress={props.onClickLabel}>
                    <Text style={labelStyle}>
                        {props.label}
                    </Text>
                </Ripple>
            )}
        </View>
    );
}