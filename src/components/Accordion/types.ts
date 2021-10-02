import { ViewStyle } from "react-native";
import { TextStyle } from "react-native";
import { IconPackType } from "../..";
import { ThemeColorType, ThemeShapeType, ThemeSizeType } from "../../types/ThemeType";

export type AccordionProps = {
    name?: string
    placeholder?: string
    value?: any
    open?: boolean
    theme?: ThemeColorType
    size?: ThemeSizeType
    shape?: ThemeShapeType
    iconPack?: IconPackType
    iconName?: string
    onClick?: (name: string) => void
    children?: JSX.Element | Array<JSX.Element>
    containerStyle?: ViewStyle
    textStyle?: TextStyle
}