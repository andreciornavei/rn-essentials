import { Theme } from "@emotion/react";
import { TextStyle, ViewStyle } from "react-native";

interface ButtonStructure {
    text?: TextStyle
    container?: ViewStyle
    icon?: ViewStyle
    image?: ViewStyle
    loading?: ViewStyle
}

interface ButtonThemes {
    "primary": ButtonStructure
    "secondary": ButtonStructure
    "success": ButtonStructure
    "danger": ButtonStructure
    "warning": ButtonStructure
    "info": ButtonStructure
    "link": ButtonStructure
    "light": ButtonStructure
    "dark": ButtonStructure
    "muted": ButtonStructure
    "white": ButtonStructure
    "outline-primary": ButtonStructure
    "outline-secondary": ButtonStructure
    "outline-success": ButtonStructure
    "outline-danger": ButtonStructure
    "outline-warning": ButtonStructure
    "outline-info": ButtonStructure
    "outline-link": ButtonStructure
    "outline-light": ButtonStructure
    "outline-dark": ButtonStructure
    "outline-muted": ButtonStructure
    "outline-white": ButtonStructure
}

interface ButtonSizes {
    "tiny": ButtonStructure,
    "small": ButtonStructure,
    "regular": ButtonStructure,
    "medium": ButtonStructure,
    "large": ButtonStructure,
}

interface ButtonShapes {
    "flat": ButtonStructure
    "rounded": ButtonStructure
    "pill": ButtonStructure
}

export const ButtonTheme = (theme: Theme) => ({
    themes: (): ButtonThemes => ({
        "primary": {
            container: { backgroundColor: theme.color.primary },
            text: { color: theme.color.white }
        },
        "secondary": {
            container: { backgroundColor: theme.color.secondary },
            text: { color: theme.color.white }
        },
        "success": {
            container: { backgroundColor: theme.color.success },
            text: { color: theme.color.white }
        },
        "danger": {
            container: { backgroundColor: theme.color.danger },
            text: { color: theme.color.white }
        },
        "warning": {
            container: { backgroundColor: theme.color.warning },
            text: { color: theme.color.dark }
        },
        "info": {
            container: { backgroundColor: theme.color.info },
            text: { color: theme.color.dark }
        },
        "link": {
            container: { backgroundColor: theme.color.transparent },
            text: { color: theme.color.link }
        },
        "light": {
            container: { backgroundColor: theme.color.light },
            text: { color: theme.color.dark }
        },
        "dark": {
            container: { backgroundColor: theme.color.dark },
            text: { color: theme.color.white }
        },
        "muted": {
            container: { backgroundColor: theme.color.muted },
            text: { color: theme.color.white }
        },
        "white": {
            container: { backgroundColor: theme.color.white },
            text: { color: theme.color.dark }
        },

        "outline-primary": {
            container: { borderColor: theme.color.primary, borderWidth: 1 },
            text: { color: theme.color.primary }
        },
        "outline-secondary": {
            container: { borderColor: theme.color.secondary, borderWidth: 1 },
            text: { color: theme.color.secondary }
        },
        "outline-success": {
            container: { borderColor: theme.color.success, borderWidth: 1 },
            text: { color: theme.color.success }
        },
        "outline-danger": {
            container: { borderColor: theme.color.danger, borderWidth: 1 },
            text: { color: theme.color.danger }
        },
        "outline-warning": {
            container: { borderColor: theme.color.warning, borderWidth: 1 },
            text: { color: theme.color.warning }
        },
        "outline-info": {
            container: { borderColor: theme.color.info, borderWidth: 1 },
            text: { color: theme.color.info }
        },
        "outline-link": {
            container: { borderColor: theme.color.link, borderWidth: 1 },
            text: { color: theme.color.link }
        },
        "outline-light": {
            container: { borderColor: theme.color.light, borderWidth: 1 },
            text: { color: theme.color.light }
        },
        "outline-dark": {
            container: { borderColor: theme.color.dark, borderWidth: 1 },
            text: { color: theme.color.dark }
        },
        "outline-muted": {
            container: { borderColor: theme.color.muted, borderWidth: 1 },
            text: { color: theme.color.muted }
        },
        "outline-white": {
            container: { borderColor: theme.color.white, borderWidth: 1 },
            text: { color: theme.color.white }
        },
    }),
    sizes: (): ButtonSizes => ({
        "tiny": {
            container: {
                height: 21,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 10,
                paddingRight: 10
            },
            text: {
                fontSize: 11,
            },
        },
        "small": {
            container: {
                height: 26,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 15,
                paddingRight: 15
            },
            text: {
                fontSize: 12,
            },
        },
        "regular": {
            container: {
                height: 35,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 20,
                paddingRight: 20
            },
            text: {
                fontSize: 13,
            },
        },
        "medium": {
            container: {
                height: 42,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 25,
                paddingRight: 25
            },
            text: {
                fontSize: 16,
            },
        },
        "large": {
            container: {
                height: 52,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 30,
                paddingRight: 30
            },
            text: {
                fontSize: 18,
            },
        },
    }),
    shapes: (): ButtonShapes => ({
        "flat": {
            "container": { borderRadius: 0 }
        },
        "rounded": {
            "container": { borderRadius: theme.roundSizeBase }
        },
        "pill": {
            "container": { borderRadius: 999 }
        }
    }),
    utils: () => ({
        center: {
            justifyContent: "center",
            paddingLeft: 35
        },
        disabled: {
            opacity: 0.7
        },
        shadow: {
            shadowColor: theme.color.shadow,
            shadowRadius: 4,
            shadowOpacity: 0.8,
            shadowOffset: { width: 0, height: 2 },
            elevation: 3,
        }
    })
})