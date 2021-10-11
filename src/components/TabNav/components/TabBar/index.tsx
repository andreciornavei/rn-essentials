import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../../../providers/ThemeProvider';
import { ThemeColorType, ThemeShapeType, ThemeSizeType } from '../../../../types/ThemeType';
import { Icon } from '../../../Icon';
import { TabTheme } from '../../theme';
import { TabNavItemProps } from '../../types';
import styles from "./styles"

export const TabBar = ({ state, descriptors, navigation, ...props }: TabNavItemProps): JSX.Element => {

    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) return <></>;

    const insets = useSafeAreaInsets();
    const theming = useTheme()
    const themer = TabTheme(theming)
    const applyProps = { ...theming.components.tab_nav, ...props }
    const theme: ThemeColorType = applyProps.theme || "primary"
    const size: ThemeSizeType = applyProps.size || "regular"
    const shape: ThemeShapeType = applyProps.shape || "flat"

    const containerStyle = [
        styles.container,
        themer.themes()[theme].container,
        themer.shapes()[shape].container,
        themer.sizes()[size].container,
        {
            paddingBottom: insets.bottom,
            height: (themer.sizes()[size].container?.height as number) + insets.bottom,
            borderTopColor: theming.color.shadow,
        },
        applyProps.containerStyle
    ]

    const itemStyle = [
        styles.item,
        themer.themes()[theme].item,
        applyProps.itemStyle
    ]

    const itemSelectedStyle = [
        themer.themes()[theme].itemSelected,
        applyProps.itemSelectedStyle
    ]

    const textStyle = [
        styles.text,
        themer.sizes()[size].text,
        themer.shapes()[shape].text,
        themer.themes()[theme].text,
        applyProps.itemTextStyle
    ]

    const textSelectedStyle = [
        themer.sizes()[size].textSelected,
        themer.shapes()[shape].textSelected,
        themer.themes()[theme].textSelected,
        applyProps.itemTextStyle
    ]

    const iconColor = applyProps.itemIconStyle?.color || themer.themes()[theme].icon?.color || theming.color.light
    const iconSelectedColor = applyProps.itemSelectedIconStyle?.color || themer.themes()[theme].iconSelected?.color || theming.color.secondary
    const iconSize = applyProps.itemIconStyle?.fontSize || themer.sizes()[size].icon?.fontSize || 21
    const iconSizeSelected = applyProps.itemSelectedIconStyle?.fontSize || themer.sizes()[size].iconSelected?.fontSize || 21

    return (
        <View style={containerStyle} >
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={String(index)}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={options.onPress ?? onPress}
                        onLongPress={onLongPress}
                        style={[itemStyle, isFocused && itemSelectedStyle]}
                    >
                        <Icon
                            pack={options.iconPack}
                            name={options.iconName}
                            size={isFocused ? iconSizeSelected : iconSize}
                            color={isFocused ? iconSelectedColor : iconColor}
                        />
                        <Text style={[textStyle, isFocused && textSelectedStyle]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}