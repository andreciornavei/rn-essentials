import { Theme } from "@emotion/react";
import { ViewStyle } from "react-native";
import { TextStyle } from "react-native";

interface AccordionStructure {
    text?: TextStyle
    container?: ViewStyle
    icon?: ViewStyle
    image?: ViewStyle
    loading?: ViewStyle
}

interface AccordionThemes {
    "primary": AccordionStructure
    "secondary": AccordionStructure
    "success": AccordionStructure
    "danger": AccordionStructure
    "warning": AccordionStructure
    "info": AccordionStructure
    "link": AccordionStructure
    "light": AccordionStructure
    "dark": AccordionStructure
    "muted": AccordionStructure
    "outline-primary": AccordionStructure
    "outline-secondary": AccordionStructure
    "outline-success": AccordionStructure
    "outline-danger": AccordionStructure
    "outline-warning": AccordionStructure
    "outline-info": AccordionStructure
    "outline-link": AccordionStructure
    "outline-light": AccordionStructure
    "outline-dark": AccordionStructure
    "outline-muted": AccordionStructure
}

interface AccordionSizes {
    "tiny": AccordionStructure,
    "small": AccordionStructure,
    "regular": AccordionStructure,
    "medium": AccordionStructure,
    "large": AccordionStructure,
}

interface AccordionShapes {
    "flat": AccordionStructure
    "rounded": AccordionStructure
    "pill": AccordionStructure
}

export const AccordionTheme = (theme: Theme) => ({
    themes: (): AccordionThemes => ({
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
    }),
    sizes: (): AccordionSizes => ({
        "tiny": {
            container: {
                height: 26,
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
                height: 32,
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
                height: 42,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 20,
                paddingRight: 20
            },
            text: {
                fontSize: 14,
            },
        },
        "medium": {
            container: {
                height: 52,
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
                height: 62,
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
    shapes: (): AccordionShapes => ({
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