import React from "react"
import { Text, View } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import _ from "lodash"
import Ripple from 'react-native-advanced-ripple';
import { Icon } from "../../components/Icon";
import { useSheet } from "../../providers/SheetProvider";
import { useTheme } from "../../providers/ThemeProvider";
import { createStyle } from "./styles";
import { Button } from "../Button";

interface Props {
    title: string
    message: string
    cancelLabel: string
    confirmLabel?: string
    onConfirm?: () => void
    onCancel?: () => void
}

export const SheetConfirmation = (props: Props): JSX.Element => {

    const theme = useTheme()
    const styles = createStyle(theme)
    const insets = useSafeAreaInsets();
    const { closeSheet } = useSheet()

    const handleCancel = () => {
        closeSheet()
        props.onCancel && props.onCancel()
    }

    const handleConfirm = () => {
        closeSheet()
        props.onConfirm && props.onConfirm()
    }

    return (
        <View style={[styles.container]}>
            <View style={[styles.modal, { marginTop: insets.top }]}>
                <View style={[styles.header]}>
                    <Text style={styles.header_title}>{props.title}</Text>
                    <Ripple
                        containerStyle={[styles.header_x]}
                        duration={250}
                        slowDuration={250}
                        onPress={closeSheet}
                    >
                        <Icon pack="Feather" name="x" size={21} color={theme.color.white} />
                    </Ripple>
                </View>
                <View style={styles.body}>
                    <Text style={styles.message}>{props.message}</Text>
                </View>
                <View style={styles.footer}>
                    <Button
                        label={props.cancelLabel}
                        theme="link"
                        wrap={true}
                        center={true}
                        onPress={handleCancel}
                        textStyle={{ color: theme.color.accentText, fontWeight: "400" }}
                        containerStyle={styles.button}
                    />
                    {(props.confirmLabel && props.onConfirm) &&
                        <Button
                            label={props.confirmLabel}
                            center={true}
                            wrap={true}
                            onPress={handleConfirm}
                            theme="link"
                            textStyle={{ color: theme.color.accentText, fontWeight: "400" }}
                            containerStyle={styles.button}
                        />
                    }
                </View>
            </View>
        </View>
    )
}