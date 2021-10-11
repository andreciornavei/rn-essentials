import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        borderTopWidth: 1,
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "space-between"
    },
    item: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 12,
        marginTop: 3
    }
});
