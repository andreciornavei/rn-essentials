import { KeyboardTypeOptions, TextStyle, ViewStyle } from "react-native"
import { TextInputMaskOptionProp, TextInputMaskTypeProp } from "react-native-masked-text"
import { ThemeColorType, ThemeIconType, ThemeShapeType, ThemeSizeType } from "../../types/ThemeType"

export type FormInputLabelPositionType = "over" | "above"
export type FormInputLabelEffect = "fixed" | "floating"
export type FormInputBorderType = "none" | "outline" | "underline"

export type FormInputProps = {
    // values
    defaultValue?: string
    value?: string
    // labels / placeholders
    placeholder?: string
    label?: string
    labelPosition?: FormInputLabelPositionType
    labelEffect?: FormInputLabelEffect
    // borders
    bordered?: FormInputBorderType
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