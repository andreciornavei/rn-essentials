import { StyleSheet } from "react-native"
import { ThemeType } from "../.."

export const createStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        container: {
            borderWidth: 1,
            borderTopWidth: 0,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderColor: theme.color.dark,
            backgroundColor: `${theme.color.light}60`,
            overflow: "hidden"
        }
    })
}