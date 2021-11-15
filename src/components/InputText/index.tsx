import _ from 'lodash';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useTheme } from '../../providers/ThemeProvider';
import { ThemeColorType, ThemeIconType, ThemeShapeType, ThemeSizeType } from '../../types/ThemeType';
import { Icon } from '../Icon';
import { Ripple } from '../Ripple';
import { createStyle } from './styles';
import { InputTextTheme } from './theme';
import { InputTextProps } from './types';

export const InputText = ({
  secureTextEntry = false,
  labelEffect = "fixed",
  ...props
}: InputTextProps): JSX.Element => {

  const theming = useTheme()
  const themer = InputTextTheme(theming)
  const styles = createStyle(theming)
  const applyProps = { ...theming.components.form_input, ...props }
  const theme: ThemeColorType = applyProps.theme || "light"
  const shape: ThemeShapeType = applyProps.shape || "flat"
  const size: ThemeSizeType = applyProps.size || "regular"
  const bordered = applyProps.bordered || "outline"
  const labelPosition = applyProps.labelPosition || "above"
  const leftIconSize = applyProps.leftIcon?.size || 16
  const rightIconSize = applyProps.rightIcon?.size || 16

  // should remove padding horizontal when exists icons
  // (icons already have symetric spaces)
  const inputPaddingLeft = applyProps.leftIcon ? 0 : themer.sizes(applyProps.multiline)[size].input?.paddingLeft || 0

  // should add legend padding left to stay aligned correcly
  // when shapes is applied
  const [control, setControl] = React.useState<string | undefined>(props.value || props.defaultValue)
  
  const inputStyle = [
    styles.form_input,
    themer.themes(applyProps.labelPosition == "boxed")[theme].input,
    themer.shapes(themer.sizes(applyProps.multiline)[size])[shape].input,
    themer.sizes(applyProps.multiline)[size].input,
    themer.bordered()[bordered].input,
    themer.themes(applyProps.labelPosition == "boxed")[theme].text,
    { ...themer.sizes(applyProps.multiline)[size].text, paddingLeft: inputPaddingLeft },
    applyProps.labelPosition == "boxed" && themer.boxed(themer.sizes(applyProps.multiline)[size], control).input,
    applyProps.inputStyle
  ]

  const containerInputStyle = [
    styles.form_input_container,
    themer.themes(applyProps.labelPosition == "boxed")[theme].container,
    themer.shapes(themer.sizes(applyProps.multiline)[size])[shape].container,
    themer.sizes(applyProps.multiline)[size].container,
    themer.bordered()[bordered].container,
    applyProps.labelPosition == "boxed" && themer.boxed(themer.sizes(applyProps.multiline)[size], control).container,
    applyProps.inputContainerStyle
  ]

  const callDebounce = (value: string, extracted?: any) => {
    props.onDebounce && props.onDebounce(value, extracted)
  }

  const handleDebounceDelayed = _.debounce(callDebounce, props.debounceTime || 1000);

  const handleChangeText = (text: string, rawText?: string | undefined) => {
    setControl(text)
    applyProps.onChangeText && applyProps.onChangeText(text, rawText)
    applyProps.onDebounce && handleDebounceDelayed(text, rawText)
  }

  const _renderInput = () => {

    const placeholderColor = themer.themes(applyProps.labelPosition == "boxed")[theme].text?.color || theming.color.dark

    return (applyProps.mask || applyProps.maskType) ? (
      <TextInputMask
        placeholder={applyProps.placeholder}
        placeholderTextColor={placeholderColor}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={applyProps.keyboardType}
        defaultValue={applyProps.defaultValue}
        value={control}
        autoFocus={props.autoFocus}
        onChangeText={handleChangeText}
        includeRawValueInChangeText={true}
        type={applyProps.maskType || "custom"}
        options={applyProps.maskType ? applyProps.maskOptions : { mask: applyProps.mask, }}
        editable={applyProps.editable}
        multiline={applyProps.multiline != undefined}
        numberOfLines={applyProps.multiline || 1}
      />
    ) : (
      <TextInput
        placeholder={applyProps.placeholder}
        placeholderTextColor={placeholderColor}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={props.autoFocus}
        keyboardType={applyProps.keyboardType}
        defaultValue={applyProps.defaultValue}
        onChangeText={handleChangeText}
        editable={applyProps.editable}
        multiline={applyProps.multiline != undefined}
        numberOfLines={applyProps.multiline || 1}
      />
    );
  }

  const _renderIcon = (icon: ThemeIconType) => {
    return (
      <Ripple
        containerStyle={[{
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          width: themer.sizes(applyProps.multiline)[size].container?.height,
          height: themer.sizes(applyProps.multiline)[size].container?.height,
        }, icon.style]}
        onPress={icon.action}
        disabled={icon.action == undefined}
      >
        <Icon
          pack={icon.pack}
          name={icon.name}
          size={icon.size || themer.sizes(applyProps.multiline)[size].text?.fontSize || 16}
          color={icon.color || applyProps.inputStyle?.color || themer.themes(applyProps.labelPosition == "boxed")[theme].text?.color || theming.color.white}
        />
      </Ripple>
    )
  }

  return (
    <View style={[styles.form_container, { marginTop: props.marginTop || 0 }, applyProps.wrapStyle]}>
      {(
        (
          props.label != undefined &&
          props.label.length > 0 &&
          (
            control != undefined && control.length > 0 ||
            labelEffect == "fixed"
          )
        )
      ) &&
        <View style={[
          styles.form_legend,
          themer.position()[labelPosition].legend_container,
          props.labelPosition == "over" && themer.themes(applyProps.labelPosition == "boxed")[theme].legend_container,
          themer.shapes(themer.sizes(applyProps.multiline)[size])[shape].legend_container,
          applyProps.labelPosition == "boxed" && themer.boxed(themer.sizes(applyProps.multiline)[size], control).legend_container,
          applyProps.legendContainerStyle
        ]}>
          <Text style={[
            styles.form_legend_value,
            themer.position()[labelPosition].legend_text,
            ["over", "boxed"].includes(String(props.labelPosition)) && themer.themes(applyProps.labelPosition == "boxed")[theme].legend_text,
            themer.shapes(themer.sizes(applyProps.multiline)[size])[shape].legend_text,
            applyProps.labelPosition == "boxed" && themer.boxed(themer.sizes(applyProps.multiline)[size], control).legend_text,
            applyProps.legendTextStyle
          ]}>
            {props.label}
          </Text>
        </View>
      }
      <View style={[containerInputStyle]}>
        {applyProps.leftIcon && _renderIcon({ ...applyProps.leftIcon, size: leftIconSize })}
        <View style={{ flex: 1 }}>
          {_renderInput()}
        </View>
        {applyProps.rightIcon && _renderIcon({ ...applyProps.rightIcon, size: rightIconSize })}
      </View>
    </View>
  )
};
