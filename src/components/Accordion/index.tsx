import React, { useState } from "react"
import Ripple from "react-native-advanced-ripple"
import { View, Text } from "react-native"
import styles from "./styles"
import { Icon } from "../Icon"
import { IconPackType, useTheme } from "../.."

interface Props {
    name: string
    placeholder?: string
    value?: any
    open?: boolean
    iconPack?: IconPackType
    iconName?: string
    onClick?: (name: string) => void
    children?: JSX.Element | Array<JSX.Element>
}

export const Accordion = (props: Props): JSX.Element => {

    const [open, setOpen] = useState(props.open || false)
    const theme = useTheme()

    return (
        <View style={styles.container}>
            <Ripple
                containerStyle={[styles.selectionContainer]}
                duration={250}
                slowDuration={250}
                onPress={() => {
                    if (props.open === undefined) setOpen((oldValue) => !oldValue)
                    props.onClick && props.onClick(props.name)
                }}
            >
                {(props.iconPack && props.iconName) && (
                    <Icon
                        pack={props.iconPack}
                        name={props.iconName}
                        size={21}
                        color={theme.color.gray}
                        style={{ marginRight: 25 }}
                    />
                )}

                <Text
                    style={[styles.selectionValue, { color: theme.color.gray }]}>
                    {props.value ?? props.placeholder ?? "-- touch to open --"}
                </Text>

                <Icon
                    pack="Feather"
                    name={`chevron-${(props.open === undefined ? open : props.open) ? "up" : "down"}`}
                    size={14}
                    color={theme.color.gray}
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