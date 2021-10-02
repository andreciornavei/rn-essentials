import { CSSProperties } from "react"
import { TextStyle } from "react-native"
import { ThemeColorType, ThemeIconType, ThemeImageType, ThemeLoadingType, ThemeShapeType, ThemeSizeType } from "../../types/ThemeType"


export type ButtonProps = {
    label?: string
    color?: string
    backgroundColor?: string
    containerStyle?: CSSProperties
    textStyle?: TextStyle
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
    symetrycSize?: number
    theme?: ThemeColorType
    size?: ThemeSizeType
    shape?: ThemeShapeType
}
