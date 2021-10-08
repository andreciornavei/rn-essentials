import { KeyboardTypeOptions, TextStyle } from "react-native"
import { TextInputMaskOptionProp, TextInputMaskTypeProp } from "react-native-masked-text"
import { ThemeColorType, ThemeShapeType, ThemeSizeType } from "../../types/ThemeType"

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
    style?: TextStyle
    editable?: boolean
}