import { StyleSheet } from "react-native"
const HEIGHT = 60

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: HEIGHT,
        backgroundColor: "#ffffff",
        alignItems: "center",
        paddingLeft: 25,
        paddingRight: 25,
        borderBottomWidth: 1,
        borderStyle: "solid",
        position: "relative",
        zIndex: 1
    },
    titleContainer: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        height: HEIGHT,
        left: 25,
        right: 25,
        bottom: 0
    }
})
