import { Theme } from "@emotion/react";
import { SheetInputTextStructure } from "./types";

interface SheetInputTextThemes {
    "primary": SheetInputTextStructure
    "secondary": SheetInputTextStructure
    "success": SheetInputTextStructure
    "danger": SheetInputTextStructure
    "warning": SheetInputTextStructure
    "info": SheetInputTextStructure
    "link": SheetInputTextStructure
    "light": SheetInputTextStructure
    "dark": SheetInputTextStructure
    "muted": SheetInputTextStructure
    "white": SheetInputTextStructure
    "outline-primary": SheetInputTextStructure
    "outline-secondary": SheetInputTextStructure
    "outline-success": SheetInputTextStructure
    "outline-danger": SheetInputTextStructure
    "outline-warning": SheetInputTextStructure
    "outline-info": SheetInputTextStructure
    "outline-link": SheetInputTextStructure
    "outline-light": SheetInputTextStructure
    "outline-dark": SheetInputTextStructure
    "outline-muted": SheetInputTextStructure
    "outline-white": SheetInputTextStructure
}

interface SheetInputTextShapes {
    "flat": SheetInputTextStructure
    "rounded": SheetInputTextStructure
    "pill": SheetInputTextStructure
}

export const SheetInputTextTheme = (theme: Theme) => ({
    themes: (): SheetInputTextThemes => ({
        "primary": {
            container: {
                backgroundColor: theme.color.primary,
                borderColor: theme.color.dark
            }
        },
        "secondary": {
            container: {
                backgroundColor: theme.color.secondary,
                borderColor: theme.color.dark
            }
        },
        "success": {
            container: {
                backgroundColor: theme.color.success,
                borderColor: theme.color.dark
            }
        },
        "danger": {
            container: {
                backgroundColor: theme.color.danger,
                borderColor: theme.color.dark
            }
        },
        "warning": {
            container: {
                backgroundColor: theme.color.warning,
                borderColor: theme.color.dark
            }
        },
        "info": {
            container: {
                backgroundColor: theme.color.info,
                borderColor: theme.color.dark
            }
        },
        "link": {
            container: {
                backgroundColor: theme.color.white,
                borderColor: theme.color.link
            }
        },
        "light": {
            container: {
                backgroundColor: theme.color.light,
                borderColor: theme.color.muted
            }
        },
        "dark": {
            container: {
                backgroundColor: theme.color.dark,
                borderColor: theme.color.black
            }
        },
        "muted": {
            container: {
                backgroundColor: theme.color.muted,
                borderColor: theme.color.light
            }
        },
        "white": {
            container: {
                backgroundColor: theme.color.white,
                borderColor: theme.color.light
            }
        },

        "outline-primary": {
            container: {
                backgroundColor: `${theme.color.primary}20`,
                borderColor: theme.color.primary
            }
        },
        "outline-secondary": {
            container: {
                backgroundColor: `${theme.color.secondary}20`,
                borderColor: theme.color.secondary
            }
        },
        "outline-success": {
            container: {
                backgroundColor: `${theme.color.success}20`,
                borderColor: theme.color.success
            }
        },
        "outline-danger": {
            container: {
                backgroundColor: `${theme.color.danger}20`,
                borderColor: theme.color.danger
            }
        },
        "outline-warning": {
            container: {
                backgroundColor: `${theme.color.warning}20`,
                borderColor: theme.color.warning
            }
        },
        "outline-info": {
            container: {
                backgroundColor: `${theme.color.info}20`,
                borderColor: theme.color.info
            }
        },
        "outline-link": {
            container: {
                backgroundColor: `${theme.color.link}20`,
                borderColor: theme.color.link
            }
        },
        "outline-dark": {
            container: {
                backgroundColor: `${theme.color.dark}20`,
                borderColor: theme.color.dark
            }
        },
        "outline-light": {
            container: {
                backgroundColor: `${theme.color.light}20`,
                borderColor: theme.color.light
            }
        },
        "outline-muted": {
            container: {
                backgroundColor: `${theme.color.muted}20`,
                borderColor: theme.color.muted
            }
        },
        "outline-white": {
            container: {
                backgroundColor: `${theme.color.white}20`,
                borderColor: theme.color.white
            }
        },
    }),
    shapes: (): SheetInputTextShapes => ({
        flat: {
            container: { borderRadius: 0 },
        },
        rounded: {
            container: { borderRadius: theme.roundSizeBase },
        },
        pill: {
            container: { borderRadius: 999 },
        }
    })
})