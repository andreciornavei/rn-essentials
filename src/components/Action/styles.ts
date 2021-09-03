import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderStyle: "solid",
    },
    label: {
        flex: 1,
        fontSize: 14,
        paddingHorizontal: 25
    }
})