import { StyleSheet } from "react-native"
import { ThemeType } from "./../../types/ThemeType";

export const createStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#00000080",
            padding: 25
        },
        modal: {
            backgroundColor: theme.color.light,
            width: "100%",
            borderRadius: 8,
            shadowOffset: { width: 0, height: 5 },
            shadowColor: "#000000",
            shadowOpacity: 0.3,
            shadowRadius: 15,
            elevation: 4
        },
        header: {
            height: 55,
            width: "100%",
            backgroundColor: theme.color.primary,
            paddingLeft: 25,
            paddingRight: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
        },
        header_title: {
            color: theme.color.light,
            fontWeight: "bold",
            fontSize: 16
        },
        header_x: {
            borderRadius: 32,
            overflow: "hidden",
            width: 32,
            height: 32,
            alignItems: "center",
            justifyContent: "center"
        },
        body: {
            padding: 25,
        },
        message: {
            color: theme.color.defaultText,
            fontSize: 14
        },
        footer: {
            flexDirection: "row",
            paddingHorizontal: 25,
            justifyContent: "flex-end",
            paddingBottom: 15
        },
        button: {
            paddingLeft: 15,
            paddingRight: 15
        }
    })
}
