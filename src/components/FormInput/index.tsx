import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useTheme } from '../../providers/ThemeProvider';
import { ThemeColorType, ThemeShapeType, ThemeSizeType } from '../../types/ThemeType';
import { createStyle } from './styles';
import { FormInputTheme } from './theme';
import { FormInputProps } from './types';

export const FormInput = ({
  secureTextEntry = false,
  labelEffect = "fixed",
  ...props
}: FormInputProps): JSX.Element => {

  const theming = useTheme()
  const themer = FormInputTheme(theming)
  const styles = createStyle(theming)
  const applyProps = { ...theming.components.form_input, ...props }
  const theme: ThemeColorType = applyProps.theme || "light"
  const shape: ThemeShapeType = applyProps.shape || "flat"
  const size: ThemeSizeType = applyProps.size || "regular"
  const bordered = applyProps.bordered || "outline"
  const labelPosition = applyProps.labelPosition || "above"

  const [control, setControl] = React.useState<string | undefined>(props.value || props.defaultValue)

  const handleChangeText = (text: string, rawText?: string | undefined) => {
    setControl(text)
    props.onChangeText && props.onChangeText(text, rawText)
  }

  const _renderInput = () => {

    const inputStyle = [
      styles.form_input,
      themer.themes()[theme].container,
      themer.themes()[theme].text,
      themer.shapes()[shape].container,
      themer.sizes()[size].container,
      themer.sizes()[size].text,
      themer.bordered()[bordered].container,
      props.style
    ]

    const placeholderColor = themer.themes()[theme].text?.color || theming.color.dark

    return (props.mask || props.maskType) ? (
      <TextInputMask
        placeholder={props.placeholder}
        placeholderTextColor={placeholderColor}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={props.keyboardType}
        defaultValue={props.defaultValue}
        value={control}
        onChangeText={handleChangeText}
        includeRawValueInChangeText={true}
        type={props.maskType || "custom"}
        options={props.maskType ? props.maskOptions : { mask: props.mask, }}
        editable={props.editable}
      />
    ) : (
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={placeholderColor}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={props.keyboardType}
        defaultValue={props.defaultValue}
        onChangeText={handleChangeText}
        editable={props.editable}
      />
    );
  }

  return (
    <View style={[styles.form_container, { marginTop: props.marginTop || 0 }]}>
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
          themer.shapes()[shape].legend_container
        ]}>
          <Text style={[
            styles.form_legend_value,
            themer.position()[labelPosition].legend_text,
            props.labelPosition == "over" && themer.themes()[theme].legend_text,
            themer.shapes()[shape].legend_text,
          ]}>
            {props.label}
          </Text>
        </View>
      }
      {_renderInput()}
    </View>
  )
};
