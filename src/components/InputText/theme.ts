import { Theme } from "@emotion/react";
import { TextStyle, ViewStyle } from "react-native";

interface InputTextStructure {
    text?: TextStyle
    container?: ViewStyle
    input?: ViewStyle
    legend_container?: ViewStyle
    legend_text?: TextStyle
}

interface InputTextThemes {
    "primary": InputTextStructure
    "secondary": InputTextStructure
    "success": InputTextStructure
    "danger": InputTextStructure
    "warning": InputTextStructure
    "info": InputTextStructure
    "link": InputTextStructure
    "light": InputTextStructure
    "dark": InputTextStructure
    "muted": InputTextStructure
    "white": InputTextStructure
    "outline-primary": InputTextStructure
    "outline-secondary": InputTextStructure
    "outline-success": InputTextStructure
    "outline-danger": InputTextStructure
    "outline-warning": InputTextStructure
    "outline-info": InputTextStructure
    "outline-link": InputTextStructure
    "outline-light": InputTextStructure
    "outline-dark": InputTextStructure
    "outline-muted": InputTextStructure
    "outline-white": InputTextStructure
}

interface InputTextSizes {
    "tiny": InputTextStructure,
    "small": InputTextStructure,
    "regular": InputTextStructure,
    "medium": InputTextStructure,
    "large": InputTextStructure,
}

interface InputTextShapes {
    "flat": InputTextStructure
    "rounded": InputTextStructure
    "pill": InputTextStructure
}

interface InputTextBorder {
    "none": InputTextStructure
    "outline": InputTextStructure
    "underline": InputTextStructure
}

interface InputTextPosition {
    "over": InputTextStructure
    "above": InputTextStructure
}

export const InputTextTheme = (theme: Theme) => ({
    themes: (): InputTextThemes => ({
        "primary": {
            container: {
                backgroundColor: theme.color.primary,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.primary, borderWidth: 1 },
            legend_text: { color: theme.color.dark }
        },
        "secondary": {
            container: {
                backgroundColor: theme.color.secondary,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: theme.color.dark }
        },
        "success": {
            container: {
                backgroundColor: theme.color.success,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: theme.color.dark }
        },
        "danger": {
            container: {
                backgroundColor: theme.color.danger,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: theme.color.dark }
        },
        "warning": {
            container: {
                backgroundColor: theme.color.warning,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.dark },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: theme.color.dark }
        },
        "info": {
            container: {
                backgroundColor: theme.color.info,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.dark },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: theme.color.dark }
        },
        "link": {
            container: {
                backgroundColor: theme.color.link,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: theme.color.dark }
        },
        "light": {
            container: {
                backgroundColor: theme.color.light,
                borderColor: theme.color.muted
            },
            text: { color: theme.color.dark },
            legend_container: { backgroundColor: theme.color.dark, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: theme.color.light }
        },
        "dark": {
            container: {
                backgroundColor: theme.color.dark,
                borderColor: theme.color.black
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.dark, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: theme.color.light }
        },
        "muted": {
            container: {
                backgroundColor: theme.color.muted,
                borderColor: theme.color.light
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.muted, borderColor: theme.color.light, borderWidth: 1 },
            legend_text: { color: theme.color.white }
        },
        "white": {
            container: {
                backgroundColor: theme.color.white,
                borderColor: theme.color.light
            },
            text: { color: theme.color.dark },
            legend_container: { backgroundColor: theme.color.light },
            legend_text: { color: theme.color.dark }
        },

        "outline-primary": {
            container: {
                backgroundColor: `${theme.color.primary}20`,
                borderColor: theme.color.primary
            },
            text: { color: theme.color.primary },
            legend_container: { backgroundColor: theme.color.primary },
            legend_text: { color: theme.color.white }
        },
        "outline-secondary": {
            container: {
                backgroundColor: `${theme.color.secondary}20`,
                borderColor: theme.color.secondary
            },
            text: { color: theme.color.secondary },
            legend_container: { backgroundColor: theme.color.secondary },
            legend_text: { color: theme.color.white }
        },
        "outline-success": {
            container: {
                backgroundColor: `${theme.color.success}20`,
                borderColor: theme.color.success
            },
            text: { color: theme.color.success },
            legend_container: { backgroundColor: theme.color.success },
            legend_text: { color: theme.color.white }
        },
        "outline-danger": {
            container: {
                backgroundColor: `${theme.color.danger}20`,
                borderColor: theme.color.danger
            },
            text: { color: theme.color.danger },
            legend_container: { backgroundColor: theme.color.danger },
            legend_text: { color: theme.color.white }
        },
        "outline-warning": {
            container: {
                backgroundColor: `${theme.color.warning}20`,
                borderColor: theme.color.warning
            },
            text: { color: theme.color.warning },
            legend_container: { backgroundColor: theme.color.warning },
            legend_text: { color: theme.color.white }
        },
        "outline-info": {
            container: {
                backgroundColor: `${theme.color.info}20`,
                borderColor: theme.color.info
            },
            text: { color: theme.color.info },
            legend_container: { backgroundColor: theme.color.info },
            legend_text: { color: theme.color.white }
        },
        "outline-link": {
            container: {
                backgroundColor: `${theme.color.link}20`,
                borderColor: theme.color.link
            },
            text: { color: theme.color.link },
            legend_container: { backgroundColor: theme.color.link },
            legend_text: { color: theme.color.white }
        },
        "outline-dark": {
            container: {
                backgroundColor: `${theme.color.dark}20`,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.dark },
            legend_container: { backgroundColor: theme.color.dark },
            legend_text: { color: theme.color.light }
        },
        "outline-light": {
            container: {
                backgroundColor: `${theme.color.light}20`,
                borderColor: theme.color.light
            },
            text: { color: theme.color.light },
            legend_container: { backgroundColor: theme.color.light },
            legend_text: { color: theme.color.dark }
        },
        "outline-muted": {
            container: {
                backgroundColor: `${theme.color.muted}20`,
                borderColor: theme.color.muted
            },
            text: { color: theme.color.muted },
            legend_container: { backgroundColor: theme.color.muted },
            legend_text: { color: theme.color.light }
        },
        "outline-white": {
            container: {
                backgroundColor: `${theme.color.white}20`,
                borderColor: theme.color.white
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.white },
            legend_text: { color: theme.color.dark }
        },
    }),
    sizes: (): InputTextSizes => ({
        "tiny": {
            container: {
                height: 26,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            },
            input: {
                height: 26,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 10,
                paddingRight: 10
            },
            text: {
                fontSize: 11
            },
        },
        "small": {
            container: {
                height: 32,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            },
            input: {
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
                height: 45,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            },
            input: {
                height: 45,
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
                paddingLeft: 0,
                paddingRight: 0
            },
            input: {
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
                paddingLeft: 0,
                paddingRight: 0
            },
            input: {
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
    shapes: (): InputTextShapes => ({
        flat: {
            container: { borderRadius: 0 },
            input: { borderRadius: 0 },
            legend_container: { borderRadius: 0 }
        },
        rounded: {
            container: { borderRadius: theme.roundSizeBase },
            input: { borderRadius: theme.roundSizeBase },
            legend_container: { borderRadius: theme.roundSizeBase }
        },
        pill: {
            container: { borderRadius: 999 },
            input: { borderRadius: theme.roundSizeBase },
            legend_container: { borderRadius: 999 }
        }
    }),
    bordered: (): InputTextBorder => ({
        none: {
            container: {
                borderWidth: 0
            }
        },
        outline: {
            container: {
                borderWidth: 1
            }
        },
        underline: {
            container: {
                borderWidth: 0,
                borderBottomWidth: 1
            }
        }
    }),
    position: (): InputTextPosition => ({
        above: {
            legend_container: {
                top: -18,
                left: 0,
                zIndex: 1,
                position: "absolute",
                borderRadius: 5,
                paddingHorizontal: 0,
            },
            legend_text: {
                fontSize: 14,
                color: theme.color.dark,
                fontWeight: "500"
            }
        },
        over: {
            legend_container: {
                top: -7,
                left: 10,
                zIndex: 1,
                position: "absolute",
                borderRadius: 5,
                backgroundColor: theme.color.dark,
            },
            legend_text: {
                fontSize: 12,
                color: theme.color.light,
                fontWeight: "500"
            }
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