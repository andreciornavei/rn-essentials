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
  const inputPaddingLeft = applyProps.leftIcon ? 0 : themer.sizes()[size].input?.paddingLeft || 0

  // should add legend padding left to stay aligned correcly
  // when shapes is applied
  const legendMarginLeft = shape == "pill" ? ((themer.sizes()[size].input?.paddingLeft || 0) as number / 2) : shape == "rounded" ? themer.shapes()[shape].container?.borderRadius : 0


  const containerInputStyle = [
    styles.form_input_container,
    themer.themes()[theme].container,
    themer.shapes()[shape].container,
    themer.sizes()[size].container,
    themer.bordered()[bordered].container,
    applyProps.inputContainerStyle
  ]

  const inputStyle = [
    styles.form_input,
    themer.themes()[theme].input,
    themer.shapes()[shape].input,
    themer.sizes()[size].input,
    themer.bordered()[bordered].input,
    themer.themes()[theme].text,
    { ...themer.sizes()[size].text, paddingLeft: inputPaddingLeft },
    applyProps.inputStyle
  ]

  const [control, setControl] = React.useState<string | undefined>(props.value || props.defaultValue)

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

    const placeholderColor = themer.themes()[theme].text?.color || theming.color.dark

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
        onChangeText={handleChangeText}
        includeRawValueInChangeText={true}
        type={applyProps.maskType || "custom"}
        options={applyProps.maskType ? applyProps.maskOptions : { mask: applyProps.mask, }}
        editable={applyProps.editable}
      />
    ) : (
      <TextInput
        placeholder={applyProps.placeholder}
        placeholderTextColor={placeholderColor}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={applyProps.keyboardType}
        defaultValue={applyProps.defaultValue}
        onChangeText={handleChangeText}
        editable={applyProps.editable}
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
          width: themer.sizes()[size].container?.height,
          height: themer.sizes()[size].container?.height,
        }, icon.style]}
        onPress={icon.action}
        disabled={icon.action == undefined}
      >
        <Icon
          pack={icon.pack}
          name={icon.name}
          size={icon.size || themer.sizes()[size].text?.fontSize || 16}
          color={icon.color || applyProps.inputStyle?.color || themer.themes()[theme].text?.color || theming.color.white}
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
          props.labelPosition == "over" && themer.themes()[theme].legend_container,
          themer.shapes()[shape].legend_container,
          { marginLeft: legendMarginLeft },
          applyProps.legendContainerStyle
        ]}>
          <Text style={[
            styles.form_legend_value,
            themer.position()[labelPosition].legend_text,
            props.labelPosition == "over" && themer.themes()[theme].legend_text,
            themer.shapes()[shape].legend_text,
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
