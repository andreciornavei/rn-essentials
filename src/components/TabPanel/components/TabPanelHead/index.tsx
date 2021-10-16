import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../../../providers/ThemeProvider';
import { ThemeColorType, ThemeShapeType, ThemeSizeType } from '../../../../types/ThemeType';
import { Icon } from '../../../Icon';
import { TabPanelTheme } from '../../theme';
import { TabPanelControlProps } from '../../types';
import styles from "./styles"

export const TabPanelHead = (props: TabPanelControlProps): JSX.Element => {

    const theming = useTheme()
    const themer = TabPanelTheme(theming)
    const applyProps = { ...theming.components.tab_panel, ...props }
    const theme: ThemeColorType = applyProps.theme || "primary"
    const size: ThemeSizeType = applyProps.size || "regular"
    const shape: ThemeShapeType = applyProps.shape || "flat"

    const containerStyle = [
        styles.container,
        themer.themes()[theme].container,
        themer.shapes()[shape].container,
        themer.sizes()[size].container,
        {
            height: (themer.sizes()[size].container?.height as number),
        },
        props.shadow && {
            borderBottomColor: theming.color.shadow,
            borderBottomWidth: 1
        },
        applyProps.containerStyle
    ]

    const itemStyle = [
        styles.item,
        themer.themes()[theme].item,
        applyProps.itemStyle,
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

    const iconContainerStyle = [
        applyProps.itemIconContainerStyle
    ]
    const iconContainerSelectedStyle = [
        applyProps.itemIconContainerSelectedStyle
    ]

    const itemCounterContainerStyle = [
        applyProps.itemCounterContainerStyle
    ]
    const itemCounterContainerSelectedStyle = [
        applyProps.itemCounterContainerSelectedStyle
    ]
    const itemCounterTextStyle = [
        applyProps.itemCounterTextStyle
    ]
    const itemCounterTextSelectedStyle = [
        applyProps.itemCounterTextSelectedStyle
    ]

    const selectedIndicatorStyle = [
        styles.selected_indicator,
        { backgroundColor: themer.themes()[theme].textSelected?.color || applyProps.itemTextStyle?.color || theming.color.accentText },
        applyProps.itemSelectedIndicatorStyle,
    ]

    const iconColor = applyProps.itemIconStyle?.color || themer.themes()[theme].icon?.color || theming.color.light
    const iconSelectedColor = applyProps.itemSelectedIconStyle?.color || themer.themes()[theme].iconSelected?.color || theming.color.secondary
    const iconSize = applyProps.itemIconStyle?.fontSize || themer.sizes()[size].icon?.fontSize || 21
    const iconSizeSelected = applyProps.itemSelectedIconStyle?.fontSize || themer.sizes()[size].iconSelected?.fontSize || 21

    return (
        <View style={containerStyle} >
            {props.tabs.map((entry, index: number) => {
                const isSelected = props.selectedTabIndex == index
                return (
                    <TouchableOpacity
                        key={String(index)}
                        accessibilityRole="button"
                        accessibilityState={isSelected ? { selected: true } : {}}
                        onPress={() => props.onChange(index)}
                        style={[
                            itemStyle,
                            isSelected && itemSelectedStyle,
                            entry.tab.direction && { flexDirection: entry.tab.direction }
                        ]}
                    >
                        {(entry.tab.iconPack && entry.tab.iconName) &&
                            <View style={[
                                iconContainerStyle,
                                isSelected && iconContainerSelectedStyle
                            ]}>
                                <Icon
                                    pack={entry.tab.iconPack}
                                    name={entry.tab.iconName}
                                    size={isSelected ? iconSizeSelected : iconSize}
                                    color={isSelected ? iconSelectedColor : iconColor}
                                />
                            </View>
                        }
                        <Text style={[
                            textStyle,
                            isSelected && textSelectedStyle,
                            entry.tab.direction == "row" && { marginTop: 0, marginLeft: 5 }
                        ]}>
                            {entry.tab.title}
                        </Text>
                        {(entry.tab.counter) &&
                            <View style={[
                                itemCounterContainerStyle,
                                isSelected && itemCounterContainerSelectedStyle
                            ]}>
                                <Text style={[
                                    itemCounterTextStyle,
                                    isSelected && itemCounterTextSelectedStyle
                                ]}>
                                    {entry.tab.counter}
                                </Text>
                            </View>
                        }

                        {(isSelected && props.itemSelectedIndicatorVisible) && <View style={[selectedIndicatorStyle]} />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}