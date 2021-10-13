import React from "react"
import { Text, View } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, InputText, Space, useSheet, useTheme } from "../..";
import { AppBottomSheetHeader } from "../../providers/SheetProvider/components/AppBottomSheetHeader";
import { InputTextProps } from "../../components/InputText/types";
import { createStyle } from "./styles"
import _ from "lodash"

interface Props {
    value?: string
    title: string
    buttonLabel: string
    inputTextProps: InputTextProps
    onChange: (value: string) => void
}

export const SheetInputText = (props: Props): JSX.Element => {

    const theme = useTheme()
    const styles = createStyle(theme)
    const insets = useSafeAreaInsets();
    const { closeSheet } = useSheet()
    const [value, setValue] = React.useState<string | undefined>(props.value)

    const handleCallback = () => {
        closeSheet()
        props.onChange && props.onChange(value || "")
    }

    return (
        <View style={[styles.container, { marginBottom: 15 + insets.bottom }]}>
            <AppBottomSheetHeader value={props.title} closeable={true} />
            <InputText
                {...props.inputTextProps}
                value={value || ""}
                defaultValue={value || ""}
                onChangeText={setValue}
            />
            <Space height={15} />
            <Button
                label={props.buttonLabel}
                center={true}
                size="medium"
                onPress={handleCallback}
            />
        </View>
    )
}