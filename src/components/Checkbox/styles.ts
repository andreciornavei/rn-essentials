import { StyleSheet } from "react-native"
import { ThemeType } from "../.."

export const createStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        checkbox: {
            display: 'flex',
            flexDirection: 'row',
            width: 30,
            height: 30,
            borderRadius: 3,
            overflow: 'hidden',
            padding: 5,
            backgroundColor: theme.color.light,
        },
        indicator: {
            width: "100%",
            height: "100%",
            borderRadius: 3,
            backgroundColor: theme.color.gray,
        },
        label_container: {
            paddingVertical: 5,
            marginLeft: 5,
            paddingLeft: 0,
            paddingRight: 10,
            borderRadius: 20,
            overflow: 'hidden',
        },
        label: {
            color: theme.color.dark,
            marginLeft: 10,
            fontSize: 14,
        },
    })
}