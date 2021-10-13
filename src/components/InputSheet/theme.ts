import { Theme } from "@emotion/react";
import { InputSheetStructure } from "./types";

interface InputSheetThemes {
    "primary": InputSheetStructure
    "secondary": InputSheetStructure
    "success": InputSheetStructure
    "danger": InputSheetStructure
    "warning": InputSheetStructure
    "info": InputSheetStructure
    "link": InputSheetStructure
    "light": InputSheetStructure
    "dark": InputSheetStructure
    "muted": InputSheetStructure
    "white": InputSheetStructure
    "outline-primary": InputSheetStructure
    "outline-secondary": InputSheetStructure
    "outline-success": InputSheetStructure
    "outline-danger": InputSheetStructure
    "outline-warning": InputSheetStructure
    "outline-info": InputSheetStructure
    "outline-link": InputSheetStructure
    "outline-light": InputSheetStructure
    "outline-dark": InputSheetStructure
    "outline-muted": InputSheetStructure
    "outline-white": InputSheetStructure
}

interface InputSheetSizes {
    "tiny": InputSheetStructure,
    "small": InputSheetStructure,
    "regular": InputSheetStructure,
    "medium": InputSheetStructure,
    "large": InputSheetStructure,
}

interface InputSheetShapes {
    "flat": InputSheetStructure
    "rounded": InputSheetStructure
    "pill": InputSheetStructure
}

export const InputSheetTheme = (theme: Theme) => ({
    themes: (): InputSheetThemes => ({
        "primary": {
            container: {
                backgroundColor: theme.color.primary,
                borderColor: theme.color.dark
            },
            label: { color: theme.color.white },
            value: { color: theme.color.white },
            placeholder: `${theme.color.white}90`
        },
        "secondary": {
            container: {
                backgroundColor: theme.color.secondary,
                borderColor: theme.color.dark
            },
            label: { color: theme.color.white },
            value: { color: theme.color.white },
            placeholder: `${theme.color.white}90`
        },
        "success": {
            container: {
                backgroundColor: theme.color.success,
                borderColor: theme.color.dark
            },
            label: { color: theme.color.white },
            value: { color: theme.color.white },
            placeholder: `${theme.color.white}90`
        },
        "danger": {
            container: {
                backgroundColor: theme.color.danger,
                borderColor: theme.color.dark
            },
            label: { color: theme.color.white },
            value: { color: theme.color.white },
            placeholder: `${theme.color.white}90`
        },
        "warning": {
            container: {
                backgroundColor: theme.color.warning,
                borderColor: theme.color.dark
            },
            label: { color: theme.color.dark },
            value: { color: theme.color.dark },
            placeholder: `${theme.color.dark}90`
        },
        "info": {
            container: {
                backgroundColor: theme.color.info,
                borderColor: theme.color.dark
            },
            label: { color: theme.color.dark },
            value: { color: theme.color.dark },
            placeholder: `${theme.color.dark}90`
        },
        "link": {
            container: {
                backgroundColor: theme.color.white,
                borderColor: theme.color.link
            },
            label: { color: theme.color.link },
            value: { color: theme.color.link },
            placeholder: `${theme.color.link}90`
        },
        "light": {
            container: {
                backgroundColor: theme.color.light,
                borderColor: theme.color.muted
            },
            label: { color: theme.color.dark },
            value: { color: theme.color.dark },
            placeholder: `${theme.color.dark}90`
        },
        "dark": {
            container: {
                backgroundColor: theme.color.dark,
                borderColor: theme.color.black
            },
            label: { color: theme.color.white },
            value: { color: theme.color.white },
            placeholder: `${theme.color.white}90`
        },
        "muted": {
            container: {
                backgroundColor: theme.color.muted,
                borderColor: theme.color.light
            },
            label: { color: theme.color.white },
            value: { color: theme.color.white },
            placeholder: `${theme.color.white}90`
        },
        "white": {
            container: {
                backgroundColor: theme.color.white,
                borderColor: theme.color.light
            },
            label: { color: theme.color.dark },
            value: { color: theme.color.dark },
            placeholder: `${theme.color.dark}90`
        },

        "outline-primary": {
            container: {
                backgroundColor: `${theme.color.primary}20`,
                borderColor: theme.color.primary
            },
            label: { color: theme.color.primary },
            value: { color: theme.color.primary },
            placeholder: `${theme.color.primary}90`
        },
        "outline-secondary": {
            container: {
                backgroundColor: `${theme.color.secondary}20`,
                borderColor: theme.color.secondary
            },
            label: { color: theme.color.secondary },
            value: { color: theme.color.secondary },
            placeholder: `${theme.color.secondary}90`
        },
        "outline-success": {
            container: {
                backgroundColor: `${theme.color.success}20`,
                borderColor: theme.color.success
            },
            label: { color: theme.color.success },
            value: { color: theme.color.success },
            placeholder: `${theme.color.success}90`
        },
        "outline-danger": {
            container: {
                backgroundColor: `${theme.color.danger}20`,
                borderColor: theme.color.danger
            },
            label: { color: theme.color.danger },
            value: { color: theme.color.danger },
            placeholder: `${theme.color.danger}90`
        },
        "outline-warning": {
            container: {
                backgroundColor: `${theme.color.warning}20`,
                borderColor: theme.color.warning
            },
            label: { color: theme.color.warning },
            value: { color: theme.color.warning },
            placeholder: `${theme.color.warning}90`
        },
        "outline-info": {
            container: {
                backgroundColor: `${theme.color.info}20`,
                borderColor: theme.color.info
            },
            label: { color: theme.color.info },
            value: { color: theme.color.info },
            placeholder: `${theme.color.info}90`
        },
        "outline-link": {
            container: {
                backgroundColor: `${theme.color.link}20`,
                borderColor: theme.color.link
            },
            label: { color: theme.color.link },
            value: { color: theme.color.link },
            placeholder: `${theme.color.link}90`
        },
        "outline-dark": {
            container: {
                backgroundColor: `${theme.color.dark}20`,
                borderColor: theme.color.dark
            },
            label: { color: theme.color.dark },
            value: { color: theme.color.dark },
            placeholder: `${theme.color.dark}90`
        },
        "outline-light": {
            container: {
                backgroundColor: `${theme.color.light}20`,
                borderColor: theme.color.light
            },
            label: { color: theme.color.light },
            value: { color: theme.color.light },
            placeholder: `${theme.color.light}90`
        },
        "outline-muted": {
            container: {
                backgroundColor: `${theme.color.muted}20`,
                borderColor: theme.color.muted
            },
            label: { color: theme.color.muted },
            value: { color: theme.color.muted },
            placeholder: `${theme.color.muted}90`
        },
        "outline-white": {
            container: {
                backgroundColor: `${theme.color.white}20`,
                borderColor: theme.color.white
            },
            label: { color: theme.color.white },
            value: { color: theme.color.white },
            placeholder: `${theme.color.white}90`
        },
    }),
    sizes: (): InputSheetSizes => ({
        "tiny": {
            container: {
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 15,
                paddingRight: 15
            },
            label: { fontSize: 11 },
            value: { fontSize: 11 },
            left_icon: { fontSize: 11 },
            right_icon: { fontSize: 11 },
        },
        "small": {
            container: {
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 20,
                paddingRight: 20
            },
            label: { fontSize: 12 },
            value: { fontSize: 12 },
            left_icon: { fontSize: 12 },
            right_icon: { fontSize: 12 },
        },
        "regular": {
            container: {
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 25,
                paddingRight: 25
            },
            label: { fontSize: 14 },
            value: { fontSize: 14 },
            left_icon: { fontSize: 14 },
            right_icon: { fontSize: 14 },
        },
        "medium": {
            container: {
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30
            },
            label: { fontSize: 16 },
            value: { fontSize: 16 },
            left_icon: { fontSize: 16 },
            right_icon: { fontSize: 16 },
        },
        "large": {
            container: {
                paddingTop: 25,
                paddingBottom: 25,
                paddingLeft: 35,
                paddingRight: 35
            },
            label: { fontSize: 18 },
            value: { fontSize: 18 },
            left_icon: { fontSize: 18 },
            right_icon: { fontSize: 18 },
        },
    }),
    shapes: (): InputSheetShapes => ({
        flat: {
            container: { borderRadius: 0 },
        },
        rounded: {
            container: { borderRadius: theme.roundSizeBase },
        },
        pill: {
            container: { borderRadius: 999 },
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