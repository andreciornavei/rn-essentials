import { Theme } from "@emotion/react";
import { CheckboxStructureProps, ThemeColorType, ThemeShapeType, ThemeSizeType } from "../..";

type CheckboxThemes = { [k in ThemeColorType]: CheckboxStructureProps }
type CheckboxSizes = { [k in ThemeSizeType]: CheckboxStructureProps }
type CheckboxShapes = { [k in ThemeShapeType]: CheckboxStructureProps }

export const CheckboxTheme = (theme: Theme) => ({
    themes: (): CheckboxThemes => ({
        "primary": { indicator: { backgroundColor: theme.color.primary } },
        "secondary": { indicator: { backgroundColor: theme.color.secondary } },
        "success": { indicator: { backgroundColor: theme.color.success } },
        "danger": { indicator: { backgroundColor: theme.color.danger } },
        "warning": { indicator: { backgroundColor: theme.color.warning } },
        "info": { indicator: { backgroundColor: theme.color.info } },
        "link": { indicator: { backgroundColor: theme.color.link } },
        "light": { indicator: { backgroundColor: theme.color.light } },
        "dark": { indicator: { backgroundColor: theme.color.dark } },
        "muted": { indicator: { backgroundColor: theme.color.muted } },
        "white": { indicator: { backgroundColor: theme.color.white } },
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
    sizes: (): CheckboxSizes => ({
        "tiny": {
            checkbox: { width: 26, height: 26 },
            label: { fontSize: 11 },
        },
        "small": {
            checkbox: { width: 32, height: 32 },
            label: { fontSize: 12 },
        },
        "regular": {
            checkbox: { width: 42, height: 42 },
            label: { fontSize: 14 },
        },
        "medium": {
            checkbox: { width: 52, height: 52 },
            label: { fontSize: 16 },
        },
        "large": {
            checkbox: { width: 62, height: 62 },
            label: { fontSize: 18 },
        },
    }),
    shapes: (): CheckboxShapes => ({
        "flat": {
            checkbox: { borderRadius: 0 },
            indicator: { borderRadius: 0 },
            label_container: { borderRadius: 0 },
        },
        "rounded": {
            checkbox: { borderRadius: theme.roundSizeBase },
            indicator: { borderRadius: theme.roundSizeBase - 2 },
            label_container: { borderRadius: theme.roundSizeBase },
        },
        "pill": {
            checkbox: { borderRadius: 999 },
            indicator: { borderRadius: 999 },
            label_container: { borderRadius: 999 },
        }
    })
})