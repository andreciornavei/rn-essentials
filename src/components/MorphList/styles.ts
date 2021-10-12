import { StyleSheet } from "react-native"
import { ThemeType } from "../.."

export const createStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        list: {
            paddingVertical: 15
        },
        listFooter: {
            padding: 25,
            alignItems: "center",
            justifyContent: "center"
        },
        listFooterLabel: {
            fontSize: 12,
            color: theme.color.gray
        }
    })
}