import React from "react"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ActionItem } from "./components/ActionItem";
import { View } from "react-native"
import { Props } from "./types";
import _, { create } from "lodash"
import { SheetActionsContext } from "./context"
import { useSheet } from "../../providers/SheetProvider";
import { InputError } from "../InputError";
import { Button } from "../Button";
import { createStyle } from "./styles"
import { useTheme } from "../../providers/ThemeProvider";

export const SheetActionsView = (props: Props): JSX.Element => {

    const insets = useSafeAreaInsets()
    const theme = useTheme()
    const styles = createStyle(theme)
    const { closeSheet } = useSheet()
    const { review } = React.useContext(SheetActionsContext)

    return (
        <View style={[styles.container, { marginBottom: 15 + insets.bottom }]}>
            <InputError value={review?.message} />
            {(props.actions || []).map((item, index) => (
                <ActionItem
                    key={`option-${index}`}
                    index={index}
                    action={item.action}
                    label={item.label}
                />
            ))}
            <Button
                label={props.closeLabel || "Cancel"}
                onPress={() => closeSheet()}
                containerStyle={styles.buttonContainer}
                textStyle={styles.buttonText}
                color={theme.color.dark}
                size="medium"
                center={true}
            />
        </View>
    )
}