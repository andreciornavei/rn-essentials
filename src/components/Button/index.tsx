import React, { CSSProperties } from "react"
import { View, Text, Image, TextStyle, ActivityIndicator, ViewStyle } from "react-native"
import Ripple from "react-native-advanced-ripple"
import styles from "./styles"
import { Icon, IconPackType } from "../Icon"
import _ from "lodash"
import { useTheme } from "../.."

interface ButtonStructure {
    text?: TextStyle
    container?: ViewStyle
    icon?: ViewStyle
    image?: ViewStyle
    loading?: ViewStyle
}

interface ButtonThemes {
    "blank": ButtonStructure,
    "link": ButtonStructure,
    "accent": ButtonStructure,
    "danger": ButtonStructure
    "green": ButtonStructure
}

interface ButtonSizes {
    "tiny": ButtonStructure,
    "regular": ButtonStructure,
    "medium": ButtonStructure,
    "large": ButtonStructure,
}

type IconPositionType = "left" | "right"

interface Props {
    label?: string
    containerStyle?: CSSProperties
    textStyle?: TextStyle
    onPress?: () => void
    bordered?: boolean
    iconName?: string
    iconPack?: IconPackType
    iconSize?: number
    iconColor?: string
    iconPosition?: IconPositionType
    image?: any
    wrap?: boolean
    center?: boolean
    shadow?: boolean
    loading?: boolean
    disabled?: boolean
    theme?: "blank" | "link" | "accent" | "danger" | "green"
    size?: "tiny" | "regular" | "medium" | "large"
}

export const Button = ({
    containerStyle = {},
    textStyle = {},
    onPress,
    bordered = false,
    iconName,
    iconPack = "Feather",
    iconPosition = "left",
    iconSize = 16,
    image,
    wrap = false,
    center = false,
    shadow = false,
    loading = false,
    theme = "blank",
    size = "regular",
    ...props
}: Props): JSX.Element => {

    const padAdjust = { paddingLeft: !center && !iconName && !image ? 25 : (iconName || image) ? 10 : 35 }
    const t = useTheme()

    const centerStyle = { justifyContent: "center", paddingLeft: 35 }
    const borderStyle = {
        borderWidth: 2
    }
    const shadowStyle = {
        shadowColor: t.color.shadow,
        shadowRadius: 4,
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    }
    const disabledStyle = {
        opacity: 0.7
    }

    const sizes: ButtonSizes = {
        "tiny": {
            container: {
                height: 26,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 5,
                paddingRight: 5
            }
        },
        "regular": {},
        "medium": {},
        "large": {},
    }

    const themes: ButtonThemes = {
        "accent": {
            container: { backgroundColor: t.color.secondary, paddingLeft: 50, paddingRight: 50, borderWidth: 2, borderColor: t.color.white },
            text: { color: t.color.white, fontSize: 14 }
        },
        "green": {
            container: {
                backgroundColor: t.color.secondary,
            },
            text: { color: t.color.white, fontSize: 14 }
        },
        "blank": {},
        "danger": {},
        "link": {
            text: { color: t.color.secondary }
        }
    }

    return (
        <View style={wrap ? styles.wrapper : {}}>
            <Ripple
                containerStyle={[
                    styles.container,
                    bordered ? borderStyle : {},
                    shadow ? shadowStyle : {},
                    center ? centerStyle : padAdjust,
                    themes[theme].container,
                    sizes[size].container,
                    props.disabled ? disabledStyle : {},
                    containerStyle
                ]}
                duration={250}
                slowDuration={250}
                onPress={onPress}
                disabled={props.disabled}
            >
                {image && <Image source={image} style={{ width: 16, height: 16 }} fadeDuration={0} />}
                {iconPosition == "left" && iconName && <Icon pack={iconPack} name={iconName} size={iconSize} color={props.iconColor || t.color.dark} />}
                {props.label && <Text style={[styles.text, themes[theme].text, sizes[size].text, textStyle, { marginLeft: (iconName || image) ? center ? 10 : 5 : 0 }]}>{props.label}</Text>}
                {iconPosition == "right" && iconName && <Icon pack={iconPack} name={iconName} size={iconSize} color={props.iconColor || t.color.dark} style={{ marginLeft: 5 }} />}
                {loading && <ActivityIndicator size="small" color={props.iconColor || t.color.white} style={{ marginLeft: 5 }} />}
            </Ripple>
        </View >
    )
}
