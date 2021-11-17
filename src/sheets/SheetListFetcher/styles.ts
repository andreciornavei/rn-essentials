import { Dimensions, Platform, StyleSheet } from "react-native"
import { EdgeInsets } from "react-native-safe-area-context"
import { ThemeType } from "../.."
const MAX_HEIGHT = Dimensions.get("window").height
const SEARCH_HEIGHT = 55
const HEADER_HEIGHT = 80
const FOOTER_HEIGHT = 55
const CONTAINER_PADDING_BOTTOM = 25
export const createStyle = (
    theme: ThemeType,
    insets: EdgeInsets,
    disabledHeader: boolean | undefined,
    disabledSearch: boolean | undefined,
    disabledFooter: boolean | undefined
) => {

    const CONAINER_MAX_HEIGHT = MAX_HEIGHT - (!disabledHeader && HEADER_HEIGHT || 0) - (!disabledSearch && SEARCH_HEIGHT || 0) - (!disabledFooter && FOOTER_HEIGHT || 0)

    return StyleSheet.create({
        container: {
            paddingBottom: CONTAINER_PADDING_BOTTOM + insets.bottom,
            backgroundColor: theme.color.white,
        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderColor: theme.color.light,
            paddingHorizontal: 25,
            height: HEADER_HEIGHT,
            minHeight: HEADER_HEIGHT,
            maxHeight: HEADER_HEIGHT
        },
        header_title: {
            fontSize: 21
        },
        search: {
            height: SEARCH_HEIGHT,
            minHeight: SEARCH_HEIGHT,
            maxHeight: SEARCH_HEIGHT,
            backgroundColor: theme.color.danger,
            alignItems: "center",
            justifyContent: "center"
        },
        search_input: {
            height: SEARCH_HEIGHT,
        },
        search_input_inner: {
            paddingLeft: 25,
            paddingRight: 25
        },
        body: {
            padding: 0
        },
        list: {
            paddingTop: 25,
            paddingBottom: 50,
            paddingHorizontal: 25,
        },
        list_container: {
            maxHeight: CONAINER_MAX_HEIGHT - CONTAINER_PADDING_BOTTOM - insets.bottom - (Platform.OS == "ios" ? insets.top : 0)
        },
        legend_container: {
            marginTop: -15
        },
        legend: {
            fontSize: 18,
            color: theme.color.muted,
        },
        footer: {
            flexDirection: "row",
            height: FOOTER_HEIGHT,
            minHeight: FOOTER_HEIGHT,
            maxHeight: FOOTER_HEIGHT
        },
    })
}