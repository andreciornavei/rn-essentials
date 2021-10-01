import { ThemeType } from "../types/ThemeType";

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
    },
    accordion: {
      theme: "primary",
      shape: "flat",
      size: "regular",
      containerStye: {},
      textStyle: {},
      iconPack: undefined,
      iconName: undefined,
      open: false,
    }
  }
};
