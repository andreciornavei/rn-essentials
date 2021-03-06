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
    checkbox: {},
    accordion: {
      theme: "primary",
      shape: "flat",
      size: "regular",
      containerStyle: {},
      textStyle: {},
      iconPack: undefined,
      iconName: undefined,
    },
    form_input: {
      theme: "light",
      shape: "flat",
      size: "regular",
      wrapStyle: {},
      inputStyle: {},
      legendContainerStyle: {},
      legendTextStyle: {}
    },
    tab_nav: {
      theme: "light",
      shape: "flat",
      size: "regular",
      containerStyle: {},
      itemStyle: {},
      itemTextStyle: {},
      itemIconStyle: {},
      itemSelectedStyle: {},
      itemSelectedTextStyle: {},
      itemSelectedIconStyle: {}
    },
    tab_panel: {
      theme: "light",
      shape: "flat",
      size: "regular"
    },
    input_sheet: {
      theme: "light",
      shape: "rounded",
      size: "regular",
      leftIcon: undefined,
      rightIcon: undefined,
      styles: {
        container: {},
        container_data: {},
        activity_indicator: {},
        value: {},
        label: {},
        left_icon: {},
        right_icon: {},
      }
    },
    input_select: {
      theme: "outline-dark",
      shape: "flat",
      size: "regular",
      containerStyle: {},
      textStyle: {},
      iconPack: undefined,
      iconName: undefined,
      selectedOptions: {
        theme: "light",
        shape: "flat",
        leftIcon: {
          pack: "Ionicons",
          name: "radio-button-on",
          space: 15
        },
      },
      unselectedOptions: {
        theme: "light",
        shape: "flat",
        leftIcon: {
          pack: "Ionicons",
          name: "radio-button-off",
          space: 15
        }
      }
    },
    sheet_input_text: {
      shape: "rounded",
      theme: "white",
      styles: {}
    }
  }
};
