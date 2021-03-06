import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    container: {
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 0,
        overflow: "hidden",
        borderColor: "#000",
        alignItems: "center"
    },
    text: {
        fontSize: 12
    },
    leftIcon: {
        marginRight: 5
    },
    rightIcon: {
        marginLeft: 5
    },
    symetric: {
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0
    },
})
