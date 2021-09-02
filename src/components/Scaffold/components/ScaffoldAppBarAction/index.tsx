import React from "react"
import { View, Text } from "react-native"
import Ripple from "react-native-advanced-ripple"
import styles from "./styles"
import type { ScaffoldAppBarActionProps } from "../../@types/ScaffoldAppBarActionProps"
import { Icon } from "../../../Icon"

export const ScaffoldAppBarAction = ({ rounded = true, iconPack = "Feather", ...props }: ScaffoldAppBarActionProps) => {
  return (
    <Ripple
      containerStyle={[
        styles.container,
        {
          width: rounded ? 42 : "auto",
          opacity: props.disabled ? 0.5 : 1
        }
      ]}
      duration={250}
      slowDuration={250}
      onPress={props.disabled ? undefined : props.action}
      disabled={props.disabled}
    >
      {props.label &&
        <Text style={[
          styles.label,
          {
            color: props.color || "#000000",
            marginRight: !props.iconName ? 0 : 5,
          }
        ]}>{props.label}</Text>
      }
      {props.iconName && <Icon pack={iconPack} name={props.iconName} size={21} color={props.color || "#000000"} />}
      {(props.alert || 0) > 0 &&
        <View style={styles.alert} pointerEvents="none">
          <Text style={styles.alertText}>{props.alert}</Text>
        </View>
      }
    </Ripple>
  )
}
