import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
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
    },
    selected_indicator: {
        position: "absolute",
        left:0,
        right: 0,
        bottom: 0,
        height: 3,
        backgroundColor: "black"
    }
});
