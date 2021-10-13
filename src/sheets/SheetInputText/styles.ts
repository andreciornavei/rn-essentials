import { StyleSheet } from "react-native"
import { ThemeType } from "../..";

export const createStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        container: {
            padding: 15,
            backgroundColor: theme.color.white,
            borderRadius: 10,
            marginHorizontal: 15,
            shadowRadius: 5,
            shadowColor: theme.color.dark,
            shadowOpacity: 0.2,
            elevation: 10
        }
    });

}