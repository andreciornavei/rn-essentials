import { Theme } from "@emotion/react";
import { TextStyle, ViewStyle } from "react-native";

interface FormInputStructure {
    text?: TextStyle
    container?: ViewStyle
    legend_container?: ViewStyle
    legend_text?: TextStyle
}

interface FormInputThemes {
    "primary": FormInputStructure
    "secondary": FormInputStructure
    "success": FormInputStructure
    "danger": FormInputStructure
    "warning": FormInputStructure
    "info": FormInputStructure
    "link": FormInputStructure
    "light": FormInputStructure
    "dark": FormInputStructure
    "muted": FormInputStructure
    "white": FormInputStructure
    "outline-primary": FormInputStructure
    "outline-secondary": FormInputStructure
    "outline-success": FormInputStructure
    "outline-danger": FormInputStructure
    "outline-warning": FormInputStructure
    "outline-info": FormInputStructure
    "outline-link": FormInputStructure
    "outline-light": FormInputStructure
    "outline-dark": FormInputStructure
    "outline-muted": FormInputStructure
    "outline-white": FormInputStructure
}

interface FormInputSizes {
    "tiny": FormInputStructure,
    "small": FormInputStructure,
    "regular": FormInputStructure,
    "medium": FormInputStructure,
    "large": FormInputStructure,
}

interface FormInputShapes {
    "flat": FormInputStructure
    "rounded": FormInputStructure
    "pill": FormInputStructure
}

interface FormInputBorder {
    "none": FormInputStructure
    "outline": FormInputStructure
    "underline": FormInputStructure
}

interface FormInputPosition {
    "over": FormInputStructure
    "above": FormInputStructure
}

export const FormInputTheme = (theme: Theme) => ({
    themes: (): FormInputThemes => ({
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
    sizes: (): FormInputSizes => ({
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
    shapes: (): FormInputShapes => ({
        flat: {
            container: { borderRadius: 0 },
            legend_container: { borderRadius: 0 }
        },
        rounded: {
            container: { borderRadius: theme.roundSizeBase },
            legend_container: { borderRadius: theme.roundSizeBase }
        },
        pill: {
            container: { borderRadius: 999 },
            legend_container: { borderRadius: 999 }
        }
    }),
    bordered: (): FormInputBorder => ({
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
    position: (): FormInputPosition => ({
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