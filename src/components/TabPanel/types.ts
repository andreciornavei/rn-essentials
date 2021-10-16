import { ColorValue, TextStyle } from "react-native";
import { ViewStyle } from "react-native";
import { IconPackType, ThemeColorType, ThemeShapeType, ThemeSizeType } from "../..";

export interface TabPanelStyleProps {
    theme?: ThemeColorType
    size?: ThemeSizeType
    shape?: ThemeShapeType
    itemSelectedIndicatorAnchor?: "inner" | "outer"
    itemCounterAnchor?: "inner" | "outer"
    itemDirection?: "column" | "row"
    containerStyle?: ViewStyle
    itemStyle?: ViewStyle
    itemTextStyle?: TextStyle
    itemIconStyle?: TextStyle
    itemSelectedStyle?: ViewStyle
    itemSelectedTextStyle?: TextStyle
    itemSelectedIconStyle?: TextStyle
    itemSelectedIndicatorStyle?: ViewStyle
    itemSelectedIndicatorVisible?: boolean
    itemIconContainerStyle?: ViewStyle
    itemIconContainerSelectedStyle?: ViewStyle
    itemCounterContainerStyle?: ViewStyle
    itemCounterContainerSelectedStyle?: ViewStyle
    itemCounterTextStyle?: TextStyle
    itemCounterTextSelectedStyle?: TextStyle
}

export interface TabPanelItemProps {
    title: string
    counter?: number
    iconPack?: IconPackType
    iconName?: string
}

export interface TabPanelProps extends TabPanelStyleProps {
    backgroundColor?: ColorValue
    shadow?: boolean
    tabs: Array<{
        component: React.FC
        tab: TabPanelItemProps
    }>

}

export interface TabPanelControlProps extends TabPanelProps {
    selectedTabIndex: number
    onChange: (tabIndex: number) => void
}
