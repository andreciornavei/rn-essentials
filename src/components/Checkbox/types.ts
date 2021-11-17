import { ColorValue } from "react-native";
import { TextStyle, ViewStyle } from "react-native";
import { ThemeColorType, ThemeShapeType, ThemeSizeType } from "../..";

export type CheckboxStructureProps = {
    wrapper?: ViewStyle
    checkbox?: ViewStyle
    indicator?: ViewStyle
    label_container?: ViewStyle
    label?: TextStyle
}

export type CheckboxStyleProps = {
    theme?: ThemeColorType
    size?: ThemeSizeType
    shape?: ThemeShapeType
    color?: ColorValue
    unselectedColor?: ColorValue
    backgroundColor?: ColorValue
    style?: CheckboxStructureProps
}

export type CheckboxProps = CheckboxStyleProps & {
    label?: string;
    checked?: boolean;
    onChangeValue?: (value: boolean) => void;
    onClickLabel?: () => void;
}

export type CheckboxControllerProps = CheckboxProps & {
    children: JSX.Element
}

export type CheckboxStateProps = {
    handleOnPress: () => void;
    realChecked: boolean;
}