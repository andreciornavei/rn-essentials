import { ColorValue, TextStyle } from "react-native";
import { ViewStyle } from "react-native";
import { IconPackType, ThemeColorType, ThemeShapeType, ThemeSizeType } from "../..";

export interface TabNavStyleProps {
    theme?: ThemeColorType
    size?: ThemeSizeType
    shape?: ThemeShapeType
    containerStyle?: ViewStyle
    itemStyle?: ViewStyle
    itemTextStyle?: TextStyle
    itemIconStyle?: TextStyle
    itemSelectedStyle?: ViewStyle
    itemSelectedTextStyle?: TextStyle
    itemSelectedIconStyle?: TextStyle
}

export interface TabNavItemProps extends TabNavStyleProps {
    state: any
    descriptors: any
    navigation: any
}


export interface TabNavProps extends TabNavStyleProps {
    backgroiundColor?: ColorValue
    initialRouteName: string
    routes: Array<{
        name: string
        component: React.FC
        options: {
            title: string
            iconPack: IconPackType
            iconName: string
            onPress?: () => void
        }
    }>

}

