import React from "react"
import { Text, View } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, InputText, Space, ThemeColorType, ThemeShapeType, useSheet, useTheme } from "../..";
import { AppBottomSheetHeader } from "../../providers/SheetProvider/components/AppBottomSheetHeader";
import { createStyle } from "./styles"
import _ from "lodash"
import { SheetInputTextTheme } from "./theme";
import { SheetInputTextProps } from "./types";

export const SheetInputText = (props: SheetInputTextProps): JSX.Element => {

    const theming = useTheme()
    const styles = createStyle(theming)
    const themer = SheetInputTextTheme(theming)
    const applyProps = { ...theming.components.sheet_input_text, ...props }
    const theme: ThemeColorType = applyProps.theme || "white"
    const shape: ThemeShapeType = applyProps.shape || "rounded"
    const insets = useSafeAreaInsets();
    const { closeSheet } = useSheet()
    const [value, setValue] = React.useState<string | undefined>(props.value)

    const handleCallback = () => {
        closeSheet()
        props.onChange && props.onChange(value || "")
    }

    return (
        <View style={[
            styles.container,
            themer.themes()[theme].container,
            themer.shapes()[shape].container,
            applyProps.styles?.container,
            { marginBottom: 15 + insets.bottom }
        ]}>
            <AppBottomSheetHeader value={props.title} closeable={true} />
            <InputText
                {...props.inputTextProps}
                value={value || ""}
                defaultValue={value || ""}
                autoFocus={true}
                onChangeText={setValue}
            />
            <Space height={15} />
            <Button
                label={props.buttonLabel}
                center={true}
                size="medium"
                onPress={handleCallback}
                {...props.buttonStyle}
            />
        </View>
    )
}