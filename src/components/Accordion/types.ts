import { ViewStyle } from "react-native";
import { TextStyle } from "react-native";
import { IconPackType } from "../..";
import { ThemeColorType, ThemeShapeType, ThemeSizeType } from "../../types/ThemeType";

export interface AccordionStyleProps {
    theme?: ThemeColorType
    size?: ThemeSizeType
    shape?: ThemeShapeType
    iconPack?: IconPackType
    iconName?: string
    containerStyle?: ViewStyle
    textStyle?: TextStyle
    placeholderStyle?: TextStyle
}

export interface AccordionProps extends AccordionStyleProps {
    name?: string
    placeholder?: string
    placeholderStrategy?: "default" | "pushed"
    value?: any
    open?: boolean
    onClick?: (name: string) => void
    children?: JSX.Element | Array<JSX.Element>
}