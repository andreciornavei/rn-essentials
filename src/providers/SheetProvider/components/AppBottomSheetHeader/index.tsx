import React from "react"
import { Text, View } from "react-native"
import Ripple from "react-native-advanced-ripple"
import { useSheet } from "../.."
import { Icon } from "../../../../components/Icon"
import styles from "./styles"

interface Props {
    value: string
    closeable?: boolean
}

export const AppBottomSheetHeader = (props: Props): JSX.Element => {

    const { closeSheet } = useSheet()

    return (
        <View style={styles.container}>
            <Text style={[
                styles.title,
                { paddingLeft: props.closeable ? 24 : 0 }
            ]}>
                {props.value}
            </Text>
            { props.closeable &&
                <Ripple
                    containerStyle={[styles.closeButton]}
                    duration={250}
                    slowDuration={250}
                    onPress={closeSheet}
                >
                    <Icon pack="Feather" name="x" size={21} color={"#666666"} />
                </Ripple>
            }
        </View>
    )
}
