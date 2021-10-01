import { IconPackType } from "..";
import { AccordionProps } from "../components/Accordion/types";
import { ButtonProps } from "../components/Button/types";

export type ThemeColorType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "link" | "light" | "dark" | "muted" | "outline-primary" | "outline-secondary" | "outline-success" | "outline-danger" | "outline-warning" | "outline-info" | "outline-link" | "outline-light" | "outline-dark" | "outline-muted"

export type ThemeSizeType = "tiny" | "small" | "regular" | "medium" | "large"

export type ThemeShapeType = "flat" | "rounded" | "pill"

export type ThemeIconType = {
    pack: IconPackType
    name: string
    size?: number
    color?: string
    space?: number
}

export type ThemeType = {
    roundSizeBase: number
    fontSizeBase: number
    backgroundColor: string
    color: {
      primary: string
      secondary: string
      link: string
      success: string
      defaultText: string
      default: string
      accentText: string
      danger: string
      warning: string
      info: string
      light: string
      muted: string
      shadow: string
      white: string
      black: string
      dark: string
      gray: string
      transparent: string
    },
    space: {
      small: number
      medium: number
      large: number
      xlarge: number
    },
    components: {
      button: ButtonProps
      accordion: AccordionProps
    }
  }