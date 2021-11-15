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
    "boxed": InputTextStructure
}

const BOXED_OPACITY = "DD"

export const InputTextTheme = (theme: Theme) => ({
    themes: (boxed: boolean): InputTextThemes => ({
        "primary": {
            container: {
                backgroundColor: theme.color.primary,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.primary, borderWidth: 1 },
            legend_text: { color: boxed ? `${theme.color.white}${BOXED_OPACITY}` : theme.color.dark }
        },
        "secondary": {
            container: {
                backgroundColor: theme.color.secondary,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: boxed ? `${theme.color.white}${BOXED_OPACITY}` : theme.color.dark }
        },
        "success": {
            container: {
                backgroundColor: theme.color.success,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: boxed ? `${theme.color.white}${BOXED_OPACITY}` : theme.color.dark }
        },
        "danger": {
            container: {
                backgroundColor: theme.color.danger,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: boxed ? `${theme.color.white}${BOXED_OPACITY}` : theme.color.dark }
        },
        "warning": {
            container: {
                backgroundColor: theme.color.warning,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.dark },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: boxed ? `${theme.color.dark}${BOXED_OPACITY}` : theme.color.dark }
        },
        "info": {
            container: {
                backgroundColor: theme.color.info,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.dark },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: boxed ? `${theme.color.dark}${BOXED_OPACITY}` : theme.color.dark }
        },
        "link": {
            container: {
                backgroundColor: theme.color.link,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.light, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: boxed ? `${theme.color.white}${BOXED_OPACITY}` : theme.color.dark }
        },
        "light": {
            container: {
                backgroundColor: theme.color.light,
                borderColor: theme.color.muted
            },
            text: { color: theme.color.dark },
            legend_container: { backgroundColor: theme.color.dark, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: boxed ? `${theme.color.dark}${BOXED_OPACITY}` : theme.color.light }
        },
        "dark": {
            container: {
                backgroundColor: theme.color.dark,
                borderColor: theme.color.black
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.dark, borderColor: theme.color.dark, borderWidth: 1 },
            legend_text: { color: boxed ? `${theme.color.white}${BOXED_OPACITY}` : theme.color.light }
        },
        "muted": {
            container: {
                backgroundColor: theme.color.muted,
                borderColor: theme.color.light
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.muted, borderColor: theme.color.light, borderWidth: 1 },
            legend_text: { color: boxed ? `${theme.color.white}${BOXED_OPACITY}` : theme.color.white }
        },
        "white": {
            container: {
                backgroundColor: theme.color.white,
                borderColor: theme.color.light
            },
            text: { color: theme.color.dark },
            legend_container: { backgroundColor: theme.color.light },
            legend_text: { color: boxed ? `${theme.color.light}${BOXED_OPACITY}` : theme.color.dark }
        },

        "outline-primary": {
            container: {
                backgroundColor: `${theme.color.primary}20`,
                borderColor: theme.color.primary
            },
            text: { color: theme.color.primary },
            legend_container: { backgroundColor: theme.color.primary },
            legend_text: { color: boxed ? `${theme.color.primary}${BOXED_OPACITY}` : theme.color.white }
        },
        "outline-secondary": {
            container: {
                backgroundColor: `${theme.color.secondary}20`,
                borderColor: theme.color.secondary
            },
            text: { color: theme.color.secondary },
            legend_container: { backgroundColor: theme.color.secondary },
            legend_text: { color: boxed ? `${theme.color.secondary}${BOXED_OPACITY}` : theme.color.white }
        },
        "outline-success": {
            container: {
                backgroundColor: `${theme.color.success}20`,
                borderColor: theme.color.success
            },
            text: { color: theme.color.success },
            legend_container: { backgroundColor: theme.color.success },
            legend_text: { color: boxed ? `${theme.color.success}${BOXED_OPACITY}` : theme.color.white }
        },
        "outline-danger": {
            container: {
                backgroundColor: `${theme.color.danger}20`,
                borderColor: theme.color.danger
            },
            text: { color: theme.color.danger },
            legend_container: { backgroundColor: theme.color.danger },
            legend_text: { color: boxed ? `${theme.color.danger}${BOXED_OPACITY}` : theme.color.white }
        },
        "outline-warning": {
            container: {
                backgroundColor: `${theme.color.warning}20`,
                borderColor: theme.color.warning
            },
            text: { color: theme.color.warning },
            legend_container: { backgroundColor: theme.color.warning },
            legend_text: { color: boxed ? `${theme.color.warning}${BOXED_OPACITY}` : theme.color.white }
        },
        "outline-info": {
            container: {
                backgroundColor: `${theme.color.info}20`,
                borderColor: theme.color.info
            },
            text: { color: theme.color.info },
            legend_container: { backgroundColor: theme.color.info },
            legend_text: { color: boxed ? `${theme.color.info}${BOXED_OPACITY}` : theme.color.white }
        },
        "outline-link": {
            container: {
                backgroundColor: `${theme.color.link}20`,
                borderColor: theme.color.link
            },
            text: { color: theme.color.link },
            legend_container: { backgroundColor: theme.color.link },
            legend_text: { color: boxed ? `${theme.color.link}${BOXED_OPACITY}` : theme.color.white }
        },
        "outline-dark": {
            container: {
                backgroundColor: `${theme.color.dark}20`,
                borderColor: theme.color.dark
            },
            text: { color: theme.color.dark },
            legend_container: { backgroundColor: theme.color.dark },
            legend_text: { color: boxed ? `${theme.color.dark}${BOXED_OPACITY}` : theme.color.light }
        },
        "outline-light": {
            container: {
                backgroundColor: `${theme.color.light}20`,
                borderColor: theme.color.light
            },
            text: { color: theme.color.light },
            legend_container: { backgroundColor: theme.color.light },
            legend_text: { color: boxed ? `${theme.color.light}${BOXED_OPACITY}` : theme.color.dark }
        },
        "outline-muted": {
            container: {
                backgroundColor: `${theme.color.muted}20`,
                borderColor: theme.color.muted
            },
            text: { color: theme.color.muted },
            legend_container: { backgroundColor: theme.color.muted },
            legend_text: { color: boxed ? `${theme.color.muted}${BOXED_OPACITY}` : theme.color.light }
        },
        "outline-white": {
            container: {
                backgroundColor: `${theme.color.white}20`,
                borderColor: theme.color.white
            },
            text: { color: theme.color.white },
            legend_container: { backgroundColor: theme.color.white },
            legend_text: { color: boxed ? `${theme.color.white}${BOXED_OPACITY}` : theme.color.dark }
        },
    }),
    sizes: (multiline: number | undefined): InputTextSizes => ({
        "tiny": {
            container: {
                height: multiline ? "auto" : 26,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            },
            input: {
                height: multiline ? (multiline * 15) + 20 : 26,
                paddingTop: multiline ? 10 : 0,
                paddingBottom: multiline ? 10 : 0,
                paddingLeft: 10,
                paddingRight: 10
            },
            text: {
                fontSize: 11
            },
        },
        "small": {
            container: {
                height: multiline ? "auto" : 32,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            },
            input: {
                height: multiline ? (multiline * 16) + 30 : 32,
                paddingTop: multiline ? 15 : 0,
                paddingBottom: multiline ? 15 : 0,
                paddingLeft: 15,
                paddingRight: 15
            },
            text: {
                fontSize: 12,
            },
        },
        "regular": {
            container: {
                height: multiline ? "auto" : 45,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            },
            input: {
                height: multiline ? (multiline * 18) + 40 : 45,
                paddingTop: multiline ? 20 : 0,
                paddingBottom: multiline ? 20 : 0,
                paddingLeft: 20,
                paddingRight: 20
            },
            text: {
                fontSize: 14,
                textAlignVertical: "top"
            },
        },
        "medium": {
            container: {
                height: multiline ? "auto" : 52,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            },
            input: {
                height: multiline ? (multiline * 20) + 50 : 52,
                paddingTop: multiline ? 25 : 0,
                paddingBottom: multiline ? 25 : 0,
                paddingLeft: 25,
                paddingRight: 25
            },
            text: {
                fontSize: 16,
            },
        },
        "large": {
            container: {
                height: multiline ? "auto" : 62,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            },
            input: {
                height: multiline ? (multiline * 22) + 60 : 62,
                paddingTop: multiline ? 30 : 0,
                paddingBottom: multiline ? 30 : 0,
                paddingLeft: 30,
                paddingRight: 30
            },
            text: {
                fontSize: 18,
            },
        },
    }),
    shapes: (size: InputTextStructure): InputTextShapes => ({
        flat: {
            container: { borderRadius: 0 },
            input: { borderRadius: 0 },
            legend_container: { borderRadius: 0 }
        },
        rounded: {
            container: { borderRadius: theme.roundSizeBase },
            input: { borderRadius: theme.roundSizeBase },
            legend_container: { borderRadius: theme.roundSizeBase, left: theme.roundSizeBase, }
        },
        pill: {
            container: { borderRadius: 999 },
            input: { borderRadius: theme.roundSizeBase },
            legend_container: { borderRadius: 999, left: parseInt(String(size.input?.paddingLeft || 0)), }
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
        },
        boxed: {
            legend_container: {
                zIndex: 1,
                position: "absolute",
                borderRadius: 5,
                paddingHorizontal: 0,
            },
            legend_text: {
                fontSize: 14,
                fontWeight: "500"
            }
        },
    }),
    boxed: (size: InputTextStructure, value: string | undefined): InputTextStructure => {
        const height = size.container?.height == "auto" ? 0 : parseInt(String(size.container?.height || 0))
        if (size.container?.height == "auto") {
            return ({
                legend_container: {
                    top: 15,
                    left: parseInt(String(size.input?.paddingLeft || 0)),
                    zIndex: 1,
                    position: "absolute",
                    borderRadius: 5
                },
                legend_text: {
                    fontWeight: "500",
                    fontSize: parseInt(String(size.text?.fontSize || 0)) - 2
                },
                input: {
                    marginTop: 40,
                    paddingTop: 0
                }
            })
        } else {
            return ({
                legend_container: {
                    top: height / 4,
                    left: parseInt(String(size.input?.paddingLeft || 0)),
                    zIndex: 1,
                    position: "absolute",
                    borderRadius: 5
                },
                legend_text: {
                    fontWeight: "500",
                    fontSize: parseInt(String(size.text?.fontSize || 0)) - 2
                },
                container: {
                    height: height + height / 4
                },
                input: {
                    height: height + height / 4,
                    paddingTop: (value != undefined && value.length > 0) ? height / 4 : 0
                }
            })
        }
    },
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