import { ColorValue } from "react-native"
import { TextStyle, ViewStyle } from "react-native"
import { SheetInputStyleProps } from "../../sheets/SheetInputText/types"
import { ThemeColorType, ThemeIconType, ThemeShapeType, ThemeSizeType } from "../../types/ThemeType"
import { ButtonStyleProps } from "../Button/types"
import { InputTextProps } from "../InputText/types"

export interface InputSheetStructure {
    container?: ViewStyle
    container_data?: ViewStyle
    label?: TextStyle
    value?: TextStyle
    placeholder?: ColorValue
    left_icon?: TextStyle
    right_icon?: TextStyle
    activity_indicator?: ViewStyle
}

export interface InputSheetStyleProps{
    // components
    leftIcon?: ThemeIconType
    rightIcon?: ThemeIconType
    // basics
    theme?: ThemeColorType
    size?: ThemeSizeType
    shape?: ThemeShapeType
    // custom styles
    marginTop?: number
    emptyColor?: ColorValue
    styles?: InputSheetStructure
    // button style
    sheetStyle?: SheetInputStyleProps
    buttonStyle?: ButtonStyleProps
}

interface MixBaseProps extends InputSheetStyleProps {
    onPress?: () => void
    label: string
    value?: string
    instruction?: string
    loading?: boolean
    buttonLabel?: string
}

interface MixInputTextProps extends MixBaseProps {
    inputType: "text"
    inputProps: InputTextProps
    onChange: (value: string) => void
}

interface MixInputOptionProps extends MixBaseProps {
    inputType: "options"
}

export type InputSheetProps = MixInputTextProps | MixInputOptionProps
