import { StyleSheet } from "react-native"
import { ThemeType } from "../.."

export const createStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: theme.color.light,
            paddingVertical: 15,
            paddingHorizontal: 25,
            borderRadius: theme.roundSizeBase,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: theme.color.shadow,
        },
        container_data: {
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
        },
        label: {
            color: theme.color.dark
        },
        value: {
            color: theme.color.gray
        },
        left_icon: {
            paddingRight: 15,
            alignSelf: "flex-start",
            marginTop: 3
        },
        right_icon: {
            paddingLeft: 15
        }
    })
}