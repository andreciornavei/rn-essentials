import { StyleSheet } from "react-native"
import { ThemeType } from "./../../types/ThemeType";
export const createStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        container: {
            padding: 0,
            backgroundColor: theme.color.light,
            borderRadius: 10,
            marginHorizontal: 15,
            shadowRadius: 5,
            shadowColor: theme.color.dark,
            shadowOpacity: 0.2,
            elevation: 10,
            overflow: "hidden"
        },
        buttonContainer: {
            marginHorizontal: 0,
            borderRadius: 0,
            borderTopWidth: 1,
            borderTopColor: theme.color.shadow,
            backgroundColor: theme.color.transparent
        },
        buttonText: {
            color: theme.color.dark,
            fontSize: 14,
            fontWeight: "400",
        }
    })
}