import _ from 'lodash';
import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { useTheme } from '../..';
import { Divider } from '../Divider';
import styles from './styles';

type Props = {
  value?: string | undefined
  describes?: Object
  tiny?: boolean
  radius?: number
  align?: "center" | "left" | "right"
  style?: ViewStyle
}

export const InputError = ({ tiny = false, ...props }: Props): JSX.Element => {

  const theme = useTheme()

  return props.value ? (
    <View style={[
      styles.container,
      tiny && styles.containerTiny,
      { borderRadius: props.radius ?? 4 },
      { backgroundColor: theme.color.danger },
      props.style
    ]}>
      <Text style={[
        styles.text,
        tiny && { ...styles.textTiny, color: theme.color.danger },
        { textAlign: props.align || "left" }
      ]}>
        {props.value}
      </Text>
      {_.isObject(props.describes) && (
        <>
          <Divider height={10} color={theme.color.white} />
          {Object.values(props.describes).map((describe, describeIndex) => {
            return (
              <Text
                key={`describe-idx-${describeIndex}`}
                style={styles.describes}
              >
                * {describe};
              </Text>
            )
          })}
        </>
      )}
    </View>
  ) : (
    <></>
  );
};
