import { StyleSheet } from "react-native"
import { ThemeType } from "../../../..";

export const createStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        topper: {
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 25
        },
        title: {
            flex: 1,
            color: theme.color.dark
        },
        description: {
            fontSize: 12,
            color: theme.color.gray,
            fontStyle: "italic",
            paddingLeft: 25
        }
    });

}