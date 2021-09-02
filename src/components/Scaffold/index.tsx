import React from "react"
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native"
import { StatusBar } from 'expo-status-bar';
import Ripple from 'react-native-advanced-ripple';
import styles from "./styles"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "../Icon";
import { Space } from "../Space";
import { useTheme } from "../..";

interface Props {
  appbar?: JSX.Element
  body?: JSX.Element
  bottom?: JSX.Element
  backgroundColor?: string
  floatActionBottom?: number
  floatActionIcon?: string
  floatActionLabel?: string
  floatActionDisabled?: boolean
  floatActionColor?: string
  floatActionForeground?: string
  floatActionLocation?: "left" | "center" | "right" | undefined
  floatActionLoading?: boolean
  floatAction?: () => void
}

export const Scaffold = ({
  appbar,
  body,
  bottom,
  backgroundColor = "ffffff",
  floatActionLocation = "right",
  ...props
}: Props): JSX.Element => {
  const insets = useSafeAreaInsets()
  const theme = useTheme()
  return (
    <View style={[
      styles.container,
      { backgroundColor: backgroundColor }
    ]}>
      {appbar ?? <View>{appbar}</View>}
      <View style={styles.body}>
        {body ?? body}
      </View>
      {props.floatAction && (
        <View style={[
          styles.floatContainer,
          {
            bottom: insets.bottom + (props.floatActionBottom || 15),
          },
          floatActionLocation == "left" && { left: 15 },
          floatActionLocation == "right" && { right: 15 },
          floatActionLocation == "center" && { left: 0, right: 0 },
        ]}>
          <View style={[
            styles.floatButton,
            {
              backgroundColor: theme.color.light,
              borderWidth: 0,
              opacity: 1,
              width: "auto",
              paddingLeft: 0,
              paddingRight: 0,
              marginHorizontal: 15,
            }
          ]}>
            <Ripple
              containerStyle={[
                styles.floatButton,
                {
                  backgroundColor: props.floatActionColor ?? "#000000",
                  borderColor: props.floatActionColor ?? "#000000",
                  opacity: props.floatActionDisabled ? 0.5 : 1
                },
                props.floatActionLabel && { width: "auto", paddingHorizontal: 50 }
              ]}
              duration={250}
              slowDuration={250}
              disabled={props.floatActionDisabled}
              onPress={props.floatAction}>
              {props.floatActionIcon && <Icon pack="Feather" name={props.floatActionIcon ?? "plus"} size={21} color={props.floatActionForeground || theme.color.white} />}
              {(props.floatActionIcon && props.floatActionLabel) && <Space width={10} />}
              {props.floatActionLabel && <Text style={[styles.floatButtonLabel, { color: props.floatActionForeground || theme.color.white }]}>{props.floatActionLabel}</Text>}
              {props.floatActionLoading && <ActivityIndicator size="small" color={props.floatActionForeground || theme.color.white} style={{ marginLeft: 15 }} />}
            </Ripple>
          </View>
        </View>
      )}
      <SafeAreaView style={styles.bottom}>
        {bottom ?? <View />}
      </SafeAreaView>
      <StatusBar />
    </View>
  );
}
