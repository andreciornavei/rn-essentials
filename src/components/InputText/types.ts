import { KeyboardTypeOptions, TextStyle, ViewStyle } from "react-native"
import { TextInputMaskOptionProp, TextInputMaskTypeProp } from "react-native-masked-text"
import { ThemeColorType, ThemeIconType, ThemeShapeType, ThemeSizeType } from "../../types/ThemeType"

export type InputTextLabelPositionType = "over" | "above"
export type InputTextLabelEffect = "fixed" | "floating"
export type InputTextBorderType = "none" | "outline" | "underline"

export type InputTextProps = {
    // values
    defaultValue?: string
    value?: string
    // labels / placeholders
    placeholder?: string
    label?: string
    labelPosition?: InputTextLabelPositionType
    labelEffect?: InputTextLabelEffect
    // borders
    bordered?: InputTextBorderType
    // icons
    leftIcon?: ThemeIconType
    rightIcon?: ThemeIconType
    // basics
    theme?: ThemeColorType
    size?: ThemeSizeType
    shape?: ThemeShapeType
    // utils
    marginTop?: number
    // events
    onChangeText?: (value: string, extracted?: any) => void
    onDebounce?: (value: string, extracted?: any) => void
    debounceTime?: number
    // native properties
    secureTextEntry?: boolean
    keyboardType?: KeyboardTypeOptions
    mask?: string
    maskType?: TextInputMaskTypeProp
    maskOptions?: TextInputMaskOptionProp
    width?: string
    editable?: boolean
    // custom styles
    wrapStyle?: ViewStyle
    inputContainerStyle?: ViewStyle
    inputStyle?: TextStyle
    legendContainerStyle?: ViewStyle
    legendTextStyle?: TextStyle
}