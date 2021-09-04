import { ButtonProps } from "../components/Button/types";

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
    }
  }