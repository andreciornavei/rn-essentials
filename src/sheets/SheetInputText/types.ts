import { ViewStyle } from "react-native"
import { ButtonStyleProps } from "../../components/Button/types"
import { InputTextProps } from "../../components/InputText/types"
import { ThemeColorType,ThemeShapeType, ThemeSizeType } from "../../types/ThemeType"

export interface SheetInputTextStructure {
    container?: ViewStyle
}

export interface SheetInputStyleProps {
    // basics
    theme?: ThemeColorType
    shape?: ThemeShapeType
    styles?: SheetInputTextStructure
}

export interface SheetInputTextProps extends SheetInputStyleProps{
    value?: string
    title: string
    buttonLabel: string
    inputTextProps: InputTextProps
    buttonStyle?: ButtonStyleProps
    onChange: (value: string) => void    
}
