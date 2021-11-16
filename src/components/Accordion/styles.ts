import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        overflow: "hidden"
    },
    selectionContainer: {
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.05)",
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    selectionValue: {
        flex: 1,
        paddingRight: 25,
        fontWeight: "400",
        fontSize: 14
    }
})