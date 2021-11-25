import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrapper: {
        overflow: "hidden"
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.05)",
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    container_text:{
        flex: 1,
        paddingRight: 25,
        flexDirection: "column",
    },
    placeholder: {
        fontWeight: "400",
        fontSize: 12
    },
    text: {
        fontWeight: "400",
        fontSize: 14
    },
})