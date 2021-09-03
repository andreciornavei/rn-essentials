import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    container: {
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 35,
        borderRadius: 100,
        overflow: "hidden",
        borderColor: "#000",
        alignItems: "center"
    },
    text: {
        fontSize: 12,
        marginLeft: 5
    }
})
