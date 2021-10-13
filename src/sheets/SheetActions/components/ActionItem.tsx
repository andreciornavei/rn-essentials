import React from "react"
import { SheetActionsContext } from "../context"
import { SheetActionType } from "../types"
import { resolveErrors } from "../../../utils/resolveErrors"
import { createStyle } from "./../styles"
import { useTheme } from "../../../providers/ThemeProvider"
import { Button } from "../../../components/Button"

export const ActionItem = (props: SheetActionType): JSX.Element => {

    const theme = useTheme()
    const styles = createStyle(theme)
    const { setReview } = React.useContext(SheetActionsContext)
    const [loading, setLoading] = React.useState<boolean>(false)

    const handleOnPress = () => {
        setLoading(true)
        setReview(undefined)
        props.action()
            .catch((error: any) => setReview(resolveErrors(error)))
            .finally(() => setLoading(false))
    }

    return (
        <Button
            label={props.label}
            onPress={handleOnPress}
            containerStyle={{ ...styles.buttonContainer, borderTopWidth: props.index == 0 ? 0 : 1 }}
            textStyle={styles.buttonText}
            color={theme.color.dark}
            center={true}
            loading={loading}
            disabled={loading}
            size="medium"
        />
    )
}