import React from "react"
import { Text } from "react-native"
import Ripple from "react-native-advanced-ripple"
import { IconPackType, useTheme } from "../.."

import { Icon } from "../Icon"
import styles from "./styles"

interface Props {
    iconPack: IconPackType
    iconName: string
    label: string
    onPress?: () => void
}

export const Action = (props: Props): JSX.Element => {

    const theme = useTheme()

    return (
        <Ripple
            containerStyle={[styles.container,{
                backgroundColor: theme.color.transparent,
                borderBottomColor: theme.color.shadow,
            }]}
            onPress={props.onPress}
        >
            <Icon
                pack={props.iconPack}
                name={props.iconName}
                size={26}
                color={theme.color.gray}
            />
            <Text
                style={styles.label}>
                {props.label}
            </Text>
            <Icon
                pack={"Feather"}
                name={"chevron-right"}
                size={16}
                color={theme.color.gray}
            />
        </Ripple>
    )
}