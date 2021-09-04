import { CSSProperties } from "react"
import { TextStyle } from "react-native"
import { IconPackType } from "../.."

export type IconPositionType = "left" | "right"

export type ThemeType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "link" | "light" | "dark" | "muted" | "outline-primary" | "outline-secondary" | "outline-success" | "outline-danger" | "outline-warning" | "outline-info" | "outline-link" | "outline-light" | "outline-dark" | "outline-muted"

export type SizeType = "tiny" | "small" | "regular" | "medium" | "large"

export type ShapeType = "flat" | "rounded" | "pill"

export type ButtonIconType = {
    pack: IconPackType
    name: string
    size?: number
    color?: string
    space?: number
}

export type ButtonImageType = {
    src: any
    size?: number,
    space?: number
}

export type ButtonLoadingType = {
    color: string
    size: number | "small" | "large" | undefined
}

export type ButtonProps = {
    label?: string
    color?: string
    backgroundColor?: string
    containerStyle?: CSSProperties
    textStyle?: TextStyle
    onPress?: () => void
    leftIcon?: ButtonIconType
    rightIcon?: ButtonIconType
    leftImage?: ButtonImageType
    rightImage?: ButtonImageType
    wrap?: boolean
    center?: boolean
    shadow?: boolean
    loading?: boolean
    loadingTheme?: ButtonLoadingType
    disabled?: boolean
    symetrycSize?: number
    theme?: ThemeType
    size?: SizeType
    shape?: ShapeType
}
