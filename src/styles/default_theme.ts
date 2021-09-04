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

export const defaultTheme: ThemeType = {
  color: {
    primary: '#00346B',
    secondary: '#E86D30',
    link: '#1890ff',
    success: '#52c41a',
    defaultText: '#333333',
    default: '#7a7a7a',
    accentText: '#E86D30',
    danger: '#F55F44',
    warning: '#ffc107',
    info: '#0dcaf0',
    light: '#f4f4f8',
    muted: '#9ba2af',
    shadow: '#E7EAF0',
    white: "#ffffff",
    black: "#000000",
    dark: "#3a3a3a",
    gray: "#939598",
    transparent: "#ffffff00"
  },
  space: {
    small: 4,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
  roundSizeBase: 8,
  fontSizeBase: 16,
  backgroundColor: '#fff',
  components: {
    button: {
      theme: "primary",
      shape: "rounded",
      size: "regular",
      containerStyle: {},
      textStyle: {},
      leftIcon: undefined,
      rightIcon: undefined,
      wrap: false,
      center: false,
      shadow: false,
      loading: false
    }
  }
};
