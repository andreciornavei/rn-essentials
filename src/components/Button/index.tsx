import React from "react"
import { View, Text, Image, ActivityIndicator } from "react-native"
import Ripple from "react-native-advanced-ripple"
import styles from "./styles"
import { Icon } from "../Icon"
import _ from "lodash"
import { useTheme } from "../.."
import { ButtonTheme } from "./theme"
import { ButtonIconType, ButtonImageType, ButtonLoadingType, ButtonProps, ShapeType, SizeType, ThemeType } from "./types"
import { ViewStyle } from "react-native"
import { ImageStyle } from "react-native"

export const Button = (props: ButtonProps): JSX.Element => {

    const theming = useTheme()
    const themer = ButtonTheme(theming)
    const applyProps = { ...theming.components.button, ...props }
    const theme: ThemeType = applyProps.theme || "primary"
    const size: SizeType = applyProps.size || "regular"
    const shape: ShapeType = applyProps.shape || "flat"

    const leftImageSize = applyProps.leftImage?.size || 16
    const leftImageSpace = applyProps.leftImage?.space || 5

    const rightImageSize = applyProps.rightImage?.size || 16
    const rightImageSpace = applyProps.rightImage?.space || 5

    const leftIconSize = applyProps.leftIcon?.size || 16
    const leftIconSpace = applyProps.leftIcon?.space || 5

    const rightIconSize = applyProps.rightIcon?.size || 16
    const rightIconSpace = applyProps.rightIcon?.space || 5

    const needLeftSpace = () => {
        return props.label || props.leftIcon || props.leftImage
    }

    const needRightSpace = () => {
        return props.label || props.rightIcon || props.rightImage
    }

    const _renderImage = (image: ButtonImageType, style?: ImageStyle) => {
        return <Image
            source={image.src}
            style={{ width: image.size, height: image.size, ...style }}
            fadeDuration={0}
        />
    }

    const _renderIcon = (icon: ButtonIconType, style: ViewStyle) => {
        return <Icon
            pack={icon.pack}
            name={icon.name}
            size={icon.size || 16}
            color={icon.color || applyProps.textStyle?.color || themer.themes()[theme].text?.color || theming.color.white}
            style={style}
        />
    }

    const _renderLoading = (loadingTheme: ButtonLoadingType | undefined) => {
        return <ActivityIndicator
            size={loadingTheme?.size || "small"}
            color={loadingTheme?.color || theming.color.white}
            style={{ marginLeft: 5 }}
        />
    }

    return (
        <View style={applyProps.wrap && styles.wrapper}>
            <Ripple
                containerStyle={[
                    styles.container,
                    applyProps.shadow && themer.utils().shadow,
                    applyProps.center && themer.utils().center,
                    themer.themes()[theme].container,
                    themer.sizes()[size].container,
                    themer.shapes()[shape].container,
                    applyProps.disabled && themer.utils().disabled,
                    applyProps.symetrycSize && { ...styles.symetric, width: applyProps.symetrycSize, height: applyProps.symetrycSize },
                    { backgroundColor: applyProps.backgroundColor || themer.themes()[theme].container?.backgroundColor },
                    applyProps.containerStyle,
                ]}
                duration={250}
                slowDuration={250}
                onPress={applyProps.onPress}
                disabled={applyProps.disabled}
            >
                {applyProps.leftImage && _renderImage({ ...applyProps.leftImage, size: leftImageSize }, { marginRight: needRightSpace() ? leftImageSpace : 0 })}
                {applyProps.leftIcon && _renderIcon({ ...applyProps.leftIcon, size: leftIconSize }, { marginRight: needRightSpace() ? leftIconSpace : 0 })}
                {applyProps.label && (
                    <Text
                        style={[
                            styles.text,
                            themer.themes()[theme].text,
                            themer.sizes()[size].text,
                            applyProps.textStyle,
                            { color: applyProps.color || themer.themes()[theme].text?.color || theming.color.dark }
                        ]}>
                        {applyProps.label}
                    </Text>
                )}
                {applyProps.rightIcon && _renderIcon({ ...applyProps.rightIcon, size: rightIconSize }, { marginLeft: needLeftSpace() ? rightIconSpace : 0 })}
                {applyProps.rightImage && _renderImage({ ...applyProps.rightImage, size: rightImageSize }, { marginLeft: needLeftSpace() ? rightImageSpace : 0 })}
                {applyProps.loading && _renderLoading(applyProps.loadingTheme)}
            </Ripple>
        </View >
    )
}
