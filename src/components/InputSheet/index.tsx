import React from "react"
import { ActivityIndicator, Text, View } from "react-native"
import { useSheet } from "../../providers/SheetProvider"
import { useTheme } from "../../providers/ThemeProvider"
import { Icon, Ripple, ThemeColorType, ThemeShapeType, ThemeSizeType } from "../.."
import { createStyle } from "./styles"
import _ from "lodash"
import { SheetInputText } from "../../sheets/SheetInputText"
import { InputSheetProps } from "./types"
import { InputSheetTheme } from "./theme"



export const InputSheet = (props: InputSheetProps) => {

    const { openSheet } = useSheet()
    const theming = useTheme()
    const themer = InputSheetTheme(theming)
    const styles = createStyle(theming)
    const applyProps = { ...theming.components.input_sheet, ...props }
    const theme: ThemeColorType = applyProps.theme || "light"
    const shape: ThemeShapeType = applyProps.shape || "flat"
    const size: ThemeSizeType = applyProps.size || "regular"

    const leftIconSize = applyProps.leftIcon?.size || applyProps?.styles?.left_icon?.fontSize || themer.sizes()[size].left_icon?.fontSize || 16
    const leftIconColor = applyProps.leftIcon?.color || applyProps?.styles?.left_icon?.color || themer.themes()[theme].left_icon?.color || applyProps.styles?.label?.color || themer.themes()[theme].label?.color || theming.color.accentText
    const rightIconSize = applyProps.rightIcon?.size || themer.sizes()[size].right_icon?.fontSize || applyProps?.styles?.right_icon?.fontSize || 16
    const rightIconColor = applyProps.rightIcon?.color || applyProps?.styles?.right_icon?.color || themer.themes()[theme].right_icon?.color || applyProps.styles?.label?.color || themer.themes()[theme].label?.color || theming.color.accentText

    const handlePressChange = () => {
        switch (applyProps.inputType) {
            case "text":
                openSheet((
                    <SheetInputText
                        title={applyProps.label}
                        value={applyProps.value as string}
                        buttonLabel={applyProps.buttonLabel || "confirmar"}
                        inputTextProps={applyProps.inputProps}
                        onChange={applyProps.onChange}
                    />
                ))
                break;
        }
    }

    return (
        <Ripple
            containerStyle={[
                styles.container,
                themer.themes()[theme].container,
                themer.shapes()[shape].container,
                themer.sizes()[size].container,
                applyProps?.styles?.container,
                applyProps.marginTop ? { marginTop: applyProps.marginTop } : {}
            ]}
            onPress={handlePressChange}
        >
            <>
                {applyProps.leftIcon && (
                    <Icon
                        pack={applyProps.leftIcon.pack}
                        name={applyProps.leftIcon.name}
                        size={leftIconSize}
                        color={applyProps.leftIcon.color || theming.color.accentText}
                        style={[
                            styles.left_icon,
                            themer.themes()[theme].left_icon,
                            themer.shapes()[shape].left_icon,
                            themer.sizes()[size].left_icon,
                            applyProps?.styles?.left_icon,
                            {
                                fontSize: leftIconSize,
                                color: leftIconColor
                            }
                        ]}
                    />
                )}
            </>
            <View style={[
                styles.container_data,
                themer.themes()[theme].container_data,
                themer.shapes()[shape].container_data,
                themer.sizes()[size].container_data,
                applyProps?.styles?.container_data,
            ]}>
                <Text style={[
                    styles.label,
                    themer.themes()[theme].label,
                    themer.shapes()[shape].label,
                    themer.sizes()[size].label,
                    applyProps?.styles?.label,
                ]}>{applyProps.label}</Text>
                <Text style={[
                    styles.value,
                    themer.themes()[theme].value,
                    themer.shapes()[shape].value,
                    themer.sizes()[size].value,
                    applyProps?.styles?.value,
                    !applyProps.value && { color: applyProps.emptyColor || applyProps.styles?.placeholder || themer.themes()[theme].placeholder || theming.color.danger }
                ]}>
                    {applyProps.value || applyProps.instruction || "input empty..."}
                </Text>
            </View>
            <>
                {applyProps.loading && <ActivityIndicator size="small" color={theming.color.accentText} />}
                {(!applyProps.loading && applyProps.rightIcon) && (
                    <Icon
                        pack={applyProps.rightIcon.pack}
                        name={applyProps.rightIcon.name}
                        size={rightIconSize}
                        color={applyProps.rightIcon.color || theming.color.accentText}
                        style={[
                            styles.right_icon,
                            themer.themes()[theme].right_icon,
                            themer.shapes()[shape].right_icon,
                            themer.sizes()[size].right_icon,
                            applyProps?.styles?.right_icon,
                            {
                                fontSize: rightIconSize,
                                color: rightIconColor
                            }
                        ]}
                    />
                )}
            </>
        </Ripple>
    )
}