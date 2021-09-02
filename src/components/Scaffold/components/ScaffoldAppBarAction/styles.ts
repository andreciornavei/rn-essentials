import { StyleSheet } from "react-native"

const SIZE = 42
const ALERT_SIZE = 15

export default StyleSheet.create({
    container: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexDirection: "row"
    },
    alert: {
        position: "absolute",
        top: 4,
        right: 5,
        backgroundColor: "#000000",
        borderRadius: ALERT_SIZE,
        minWidth: ALERT_SIZE,
        height: ALERT_SIZE,
        paddingHorizontal: 2,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    alertText: {
        fontSize: 10,
        color: "#ffffff"
    },
    label: {
        fontSize: 12,
        letterSpacing: 1
    }
})
