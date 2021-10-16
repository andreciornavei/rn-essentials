import { Theme } from "@emotion/react";
import { TextStyle, ViewStyle } from "react-native";

interface TabPanelStructure {
    container?: ViewStyle
    item?: ViewStyle
    itemSelected?: ViewStyle
    text?: TextStyle
    textSelected?: TextStyle
    icon?: TextStyle
    iconSelected?: TextStyle
}

interface TabPanelThemes {
    "primary": TabPanelStructure
    "secondary": TabPanelStructure
    "success": TabPanelStructure
    "danger": TabPanelStructure
    "warning": TabPanelStructure
    "info": TabPanelStructure
    "link": TabPanelStructure
    "light": TabPanelStructure
    "dark": TabPanelStructure
    "muted": TabPanelStructure
    "white": TabPanelStructure
    "outline-primary": TabPanelStructure
    "outline-secondary": TabPanelStructure
    "outline-success": TabPanelStructure
    "outline-danger": TabPanelStructure
    "outline-warning": TabPanelStructure
    "outline-info": TabPanelStructure
    "outline-link": TabPanelStructure
    "outline-light": TabPanelStructure
    "outline-dark": TabPanelStructure
    "outline-muted": TabPanelStructure
    "outline-white": TabPanelStructure
}

interface TabPanelSizes {
    "tiny": TabPanelStructure,
    "small": TabPanelStructure,
    "regular": TabPanelStructure,
    "medium": TabPanelStructure,
    "large": TabPanelStructure,
}

interface TabPanelShapes {
    "flat": TabPanelStructure
    "rounded": TabPanelStructure
    "pill": TabPanelStructure
}

export const TabPanelTheme = (theme: Theme) => ({
    themes: (): TabPanelThemes => ({
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
        "outline-primary": {
            container: { backgroundColor: `${theme.color.primary}20` },
            icon: { color: theme.color.dark },
        },
        "outline-secondary": {
            container: { backgroundColor: `${theme.color.secondary}20` },
            icon: { color: theme.color.dark },
        },
        "outline-success": {
            container: { backgroundColor: `${theme.color.success}20` },
            icon: { color: theme.color.dark },
        },
        "outline-danger": {
            container: { backgroundColor: `${theme.color.danger}20` },
            icon: { color: theme.color.dark },
        },
        "outline-warning": {
            container: { backgroundColor: `${theme.color.warning}20` },
            icon: { color: theme.color.dark },
        },
        "outline-info": {
            container: { backgroundColor: `${theme.color.info}20` },
            icon: { color: theme.color.dark },
        },
        "outline-link": {
            container: { backgroundColor: `${theme.color.link}20` },
            icon: { color: theme.color.dark },
        },
        "outline-light": {
            container: { backgroundColor: `${theme.color.light}20` },
            icon: { color: theme.color.dark },
        },
        "outline-dark": {
            container: { backgroundColor: `${theme.color.dark}20` },
            icon: { color: theme.color.dark },
        },
        "outline-muted": {
            container: { backgroundColor: `${theme.color.muted}20` },
            icon: { color: theme.color.dark },
        },
        "outline-white": {
            container: { backgroundColor: `${theme.color.white}20` },
            icon: { color: theme.color.dark },
        },
    }),
    sizes: (): TabPanelSizes => ({
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
    shapes: (): TabPanelShapes => ({
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