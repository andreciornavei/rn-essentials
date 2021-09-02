import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 20
    },
    title: {
        fontSize: 16,
        fontFamily: "moriston-medium",
        letterSpacing: 1,
        color: "#3a3a3a",
        flex: 1,
        textAlign: "center"
    },
    closeButton: {
        width: 24,
        height: 24,
        borderRadius: 24,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    }
});
