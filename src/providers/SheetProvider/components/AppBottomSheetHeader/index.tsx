import { useTheme } from "@emotion/react"
import React from "react"
import { Text, View } from "react-native"
import { useSheet } from "../.."

import { Icon } from "../../../../components/Icon"
import { Ripple } from "../../../../components/Ripple"
import styles from "./styles"

interface Props {
    value: string
    closeable?: boolean
}

export const AppBottomSheetHeader = (props: Props): JSX.Element => {

    const theme = useTheme()
    const { closeSheet } = useSheet()

    return (
        <View style={styles.container}>
            <Text style={[
                styles.title,
                { paddingLeft: props.closeable ? 24 : 0 }
            ]}>
                {props.value}
            </Text>
            {props.closeable &&
                <Ripple
                    containerStyle={[styles.closeButton]}
                    onPress={closeSheet}
                >
                    <Icon pack="Feather" name="x" size={21} color={theme.color.gray} />
                </Ripple>
            }
        </View>
    )
}
