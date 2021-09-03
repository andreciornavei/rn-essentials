import React, { CSSProperties } from "react"
import { View, Text, Image, TextStyle, ActivityIndicator, ViewStyle } from "react-native"
import Ripple from "react-native-advanced-ripple"
import styles from "./styles"
import { Icon } from "../Icon"
import _ from "lodash"
import { useTheme, IconPackType } from "../.."
import { ButtonTheme } from "./theme"


interface Props {
    label?: string
    color?: string
    backgroundColor?: string
    containerStyle?: CSSProperties
    textStyle?: TextStyle
    onPress?: () => void
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
    theme?: ThemeType
    size?: SizeType
}

export const Button = ({
    containerStyle = {},
    textStyle = {},
    onPress,
    iconName,
    iconPack = "Feather",
    iconPosition = "left",
    iconSize = 16,
    image,
    wrap = false,
    center = false,
    shadow = false,
    loading = false,
    theme = "primary",
    size = "regular",
    ...props
}: Props): JSX.Element => {

    const padAdjust = { paddingLeft: !center && !iconName && !image ? 25 : (iconName || image) ? 10 : 35 }
    const theming = useTheme()
    const themer = ButtonTheme(theming)


    return (
        <View style={wrap ? styles.wrapper : {}}>
            <Ripple
                containerStyle={[
                    styles.container,
                    shadow && themer.utils().shadow,
                    center ? themer.utils().center : padAdjust,
                    themer.themes()[theme].container,
                    themer.sizes()[size].container,
                    props.disabled && themer.utils().disabled,
                    { backgroundColor: props.backgroundColor || themer.themes()[theme].container?.backgroundColor },
                    containerStyle
                ]}
                duration={250}
                slowDuration={250}
                onPress={onPress}
                disabled={props.disabled}
            >
                {image && <Image source={image} style={{ width: iconSize, height: iconSize }} fadeDuration={0} />}
                {iconPosition == "left" && iconName && <Icon pack={iconPack} name={iconName} size={iconSize} color={props.iconColor || theming.color.dark} />}
                {props.label && (
                    <Text
                        style={[
                            styles.text,
                            themer.themes()[theme].text,
                            themer.sizes()[size].text,
                            textStyle,
                            { color: props.color || themer.themes()[theme].text?.color || theming.color.dark },
                            { marginLeft: (iconName || image) ? center ? 10 : 5 : 0 }
                        ]}>
                        {props.label}
                    </Text>
                )}
                {iconPosition == "right" && iconName && <Icon pack={iconPack} name={iconName} size={iconSize} color={props.iconColor || theming.color.dark} style={{ marginLeft: 5 }} />}
                {loading && <ActivityIndicator size="small" color={props.iconColor || theming.color.white} style={{ marginLeft: 5 }} />}
            </Ripple>
        </View >
    )
}
