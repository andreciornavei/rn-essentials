import React, { useState } from "react"
import { View, Text } from "react-native"
import styles from "./styles"
import { Icon } from "../Icon"
import { useTheme } from "../.."
import { Ripple } from "../Ripple"
import { AccordionProps } from "./types"
import { AccordionTheme } from "./theme"
import { ViewStyle } from "react-native"
import { ThemeColorType, ThemeShapeType, ThemeSizeType } from "../../types/ThemeType"

export const Accordion = (props: AccordionProps): JSX.Element => {

    const theming = useTheme()
    const themer = AccordionTheme(theming)
    const applyProps = { ...theming.components.accordion, ...props }
    const theme: ThemeColorType = applyProps.theme || "primary"
    const size: ThemeSizeType = applyProps.size || "regular"
    const shape: ThemeShapeType = applyProps.shape || "flat"
    const [open, setOpen] = useState(props.open || false)

    return (
        <View style={styles.wrapper}>
            <Ripple
                containerStyle={[
                    styles.container,
                    themer.themes()[theme].container as ViewStyle,
                    themer.sizes()[size].container as ViewStyle,
                    themer.shapes()[shape].container as ViewStyle,
                    applyProps.containerStyle as ViewStyle,
                ]}
                onPress={() => {
                    if (applyProps.open === undefined) setOpen((oldValue) => !oldValue)
                    applyProps.onClick && applyProps.onClick(props?.name ?? "undefined")
                }}
            >
                <>
                    {(applyProps.iconPack && applyProps.iconName) && (
                        <Icon
                            pack={applyProps.iconPack}
                            name={applyProps.iconName}
                            size={(themer.sizes()[size].text?.fontSize || 16) + 7}
                            color={themer.themes()[theme].text?.color || theming.color.gray}
                            style={{ marginRight: 25 }}
                        />
                    )}
                </>
                <View style={[styles.container_text]}>
                    {(applyProps.placeholderStrategy == "pushed" && applyProps.value) &&
                        <Text
                            style={[
                                styles.placeholder,
                                themer.themes()[theme].placeholder,
                                themer.sizes()[size].placeholder,
                                applyProps.placeholderStyle,
                                { color: applyProps.placeholderStyle?.color || themer.themes()[theme].placeholder?.color || theming.color.dark },
                            ]}
                            numberOfLines={props.numberOfLines}
                            lineBreakMode="tail"
                        >
                            {applyProps.placeholder ?? "-- touch to open --"}
                        </Text>
                    }
                    <Text
                        style={[
                            styles.text,
                            themer.themes()[theme].text,
                            themer.sizes()[size].text,
                            applyProps.textStyle,
                            { color: applyProps.textStyle?.color || themer.themes()[theme].text?.color || theming.color.dark },
                        ]}
                        numberOfLines={props.numberOfLines}
                        lineBreakMode="tail"
                    >
                        {applyProps.value ?? applyProps.placeholder ?? "-- touch to open --"}
                    </Text>
                </View>
                <Icon
                    pack="Feather"
                    name={`chevron-${(props.open === undefined ? open : props.open) ? "up" : "down"}`}
                    size={themer.sizes()[size].text?.fontSize || 14}
                    color={themer.themes()[theme].text?.color || theming.color.gray}
                />

            </Ripple>
            {(props.open === undefined ? open : props.open) &&
                <View>
                    {props.children}
                </View>
            }
        </View>
    )
}