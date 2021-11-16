import { ColorValue } from "react-native";
import { ThemeIconType, ThemeImageType } from "../..";
import { IconPackType } from "../../types/IconPackType";
import { ButtonProps } from "../Button/types";

export type InputRadioSingleValue = String | number | undefined
export type InputRadioMultipleValue = InputRadioSingleValue[] | undefined

export interface InputRadioOption {
    value: string | number
    label: string
    leftIcon?: ThemeIconType
    rightIcon?: ThemeIconType
    leftImage?: ThemeImageType
    rightImage?: ThemeImageType
}

interface StyleProps {}

interface BaseProps extends StyleProps {
    options: Array<InputRadioOption>
    space?: number
    disabled?: boolean
    virtualized?: boolean
    renderLastLine?: boolean
    renderFirstLine?: boolean
    loadOptions?: () => Promise<Array<InputRadioOption>>
    onLoadedOptions?: (options: Array<InputRadioOption>) => void
    selectedOptions?: Omit<ButtonProps, "label" | "onPress" | "loading" | "loadingTheme">
    unselectedOptions?: Omit<ButtonProps, "label" | "onPress" | "loading" | "loadingTheme">
}

interface SingleProps extends BaseProps {
    mode: "single"
    value?: InputRadioSingleValue
    onSelect: (value: InputRadioSingleValue) => void
}

interface MultipleProps extends BaseProps {
    mode: "multiple"
    value?: InputRadioMultipleValue
    onSelect: (value: InputRadioMultipleValue) => void
}

export type InputRadioProps = SingleProps | MultipleProps