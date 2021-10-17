import { StyleSheet } from "react-native"
import { ThemeType } from "../.."

export const createStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        container: {

        },
        selectionContainer: {
            flexDirection: "row",
            alignItems: "center",
            borderTopColor: "rgba(0,0,0,0.05)",
            borderBottomColor: "rgba(0,0,0,0.05)",
            paddingVertical: 15,
            paddingHorizontal: 15
        },
        selectionValue: {
            flex: 1,
            color: theme.color.gray,
            fontWeight: "400",
            fontSize: 14
        }
    })
}