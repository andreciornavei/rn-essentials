import { CSSProperties } from "react"
import { TextStyle } from "react-native"
import { ThemeColorType, ThemeIconType, ThemeImageType, ThemeLoadingType, ThemeShapeType, ThemeSizeType } from "../../types/ThemeType"

export type ButtonStyleProps = {
    symetrycSize?: number
    theme?: ThemeColorType
    size?: ThemeSizeType
    shape?: ThemeShapeType
    color?: string
    backgroundColor?: string
    containerStyle?: CSSProperties
    textStyle?: TextStyle
}

export interface ButtonProps extends ButtonStyleProps {
    label?: string    
    onPress?: () => void
    leftIcon?: ThemeIconType
    rightIcon?: ThemeIconType
    leftImage?: ThemeImageType
    rightImage?: ThemeImageType
    wrap?: boolean
    center?: boolean
    shadow?: boolean
    loading?: boolean
    loadingTheme?: ThemeLoadingType
    disabled?: boolean    
}
