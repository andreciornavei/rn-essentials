import { Theme } from "@emotion/react";
import { TextStyle, ViewStyle } from "react-native";

interface TabStructure {
    container?: ViewStyle
    item?: ViewStyle
    itemSelected?: ViewStyle
    text?: TextStyle
    textSelected?: TextStyle
    icon?: TextStyle
    iconSelected?: TextStyle
}

interface TabThemes {
    "primary": TabStructure
    "secondary": TabStructure
    "success": TabStructure
    "danger": TabStructure
    "warning": TabStructure
    "info": TabStructure
    "link": TabStructure
    "light": TabStructure
    "dark": TabStructure
    "muted": TabStructure
    "white": TabStructure
    "outline-primary": TabStructure
    "outline-secondary": TabStructure
    "outline-success": TabStructure
    "outline-danger": TabStructure
    "outline-warning": TabStructure
    "outline-info": TabStructure
    "outline-link": TabStructure
    "outline-light": TabStructure
    "outline-dark": TabStructure
    "outline-muted": TabStructure
    "outline-white": TabStructure
}

interface TabSizes {
    "tiny": TabStructure,
    "small": TabStructure,
    "regular": TabStructure,
    "medium": TabStructure,
    "large": TabStructure,
}

interface TabShapes {
    "flat": TabStructure
    "rounded": TabStructure
    "pill": TabStructure
}

export const TabTheme = (theme: Theme) => ({
    themes: (): TabThemes => ({
        "primary": {
            container: { backgroundColor: theme.color.primary },
            text: { color: theme.color.white },
            textSelected: { color: theme.color.accentText },
            icon: { color: theme.color.light },
            iconSelected: { color: theme.color.secondary }
        },
        "secondary": {
            container: { backgroundColor: theme.color.secondary },
            text: { color: theme.color.white },
            textSelected: { color: theme.color.primary },
            icon: { color: theme.color.white },
            iconSelected: { color: theme.color.primary },
        },
        "success": {
            container: { backgroundColor: theme.color.success },
            text: { color: theme.color.white },
            textSelected: { color: theme.color.dark },
            icon: { color: theme.color.white },
            iconSelected: { color: theme.color.dark },
        },
        "danger": {
            container: { backgroundColor: theme.color.danger },
            text: { color: theme.color.white },
            textSelected: { color: theme.color.dark },
            icon: { color: theme.color.white },
            iconSelected: { color: theme.color.dark },
        },
        "warning": {
            container: { backgroundColor: theme.color.warning },
            text: { color: theme.color.white },
            textSelected: { color: theme.color.dark },
            icon: { color: theme.color.white },
            iconSelected: { color: theme.color.dark },
        },
        "info": {
            container: { backgroundColor: theme.color.info },
            text: { color: theme.color.white },
            textSelected: { color: theme.color.dark },
            icon: { color: theme.color.white },
            iconSelected: { color: theme.color.dark },
        },
        "link": {
            container: { backgroundColor: theme.color.transparent },
            text: { color: theme.color.gray },
            textSelected: { color: theme.color.link },
            icon: { color: theme.color.gray },
            iconSelected: { color: theme.color.link },
        },
        "light": {
            container: { backgroundColor: theme.color.light },
            text: { color: theme.color.gray },
            textSelected: { color: theme.color.dark },
            icon: { color: theme.color.gray },
            iconSelected: { color: theme.color.dark },
        },
        "dark": {
            container: { backgroundColor: theme.color.dark },
            text: { color: theme.color.gray },
            textSelected: { color: theme.color.white },
            icon: { color: theme.color.gray },
            iconSelected: { color: theme.color.white },
        },
        "muted": {
            container: { backgroundColor: theme.color.muted },
            text: { color: theme.color.white },
            textSelected: { color: theme.color.dark },
            icon: { color: theme.color.white },
            iconSelected: { color: theme.color.dark },
        },
        "white": {
            container: { backgroundColor: theme.color.white },
            text: { color: theme.color.gray },
            textSelected: { color: theme.color.dark },
            icon: { color: theme.color.gray },
            iconSelected: { color: theme.color.dark },
        },

        "outline-primary": {},
        "outline-secondary": {},
        "outline-success": {},
        "outline-danger": {},
        "outline-warning": {},
        "outline-info": {},
        "outline-link": {},
        "outline-light": {},
        "outline-dark": {},
        "outline-muted": {},
        "outline-white": {},
    }),
    sizes: (): TabSizes => ({
        "tiny": {
            container: { height: 40 },
            text: { fontSize: 11 },
            textSelected: { fontSize: 11 },
            icon: { fontSize: 14 },
            iconSelected: { fontSize: 14 },
        },
        "small": {
            container: { height: 50 },
            text: { fontSize: 12 },
            textSelected: { fontSize: 12 },
            icon: { fontSize: 15 },
            iconSelected: { fontSize: 15 },
        },
        "regular": {
            container: { height: 60 },
            text: { fontSize: 14 },
            textSelected: { fontSize: 14 },
            icon: { fontSize: 21 },
            iconSelected: { fontSize: 21 },
        },
        "medium": {
            container: { height: 70 },
            text: { fontSize: 16 },
            textSelected: { fontSize: 16 },
            icon: { fontSize: 24 },
            iconSelected: { fontSize: 24 },
        },
        "large": {
            container: { height: 80 },
            text: { fontSize: 18 },
            textSelected: { fontSize: 18 },
            icon: { fontSize: 26 },
            iconSelected: { fontSize: 26 },
        },
    }),
    shapes: (): TabShapes => ({
        "flat": {
            container: { borderRadius: 0 },
            text: {},
            textSelected: {},
            item: {},
            itemSelected: {},
            iconSelected: {},
        },
        "rounded": {
            container: { borderRadius: theme.roundSizeBase },
            text: {},
            textSelected: {},
            item: {},
            itemSelected: {},
            iconSelected: {},
        },
        "pill": {
            container: { borderRadius: 999 },
            text: {},
            textSelected: {},
            item: {},
            itemSelected: {},
            iconSelected: {},
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