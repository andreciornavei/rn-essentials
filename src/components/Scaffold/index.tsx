import React from "react"
import { SafeAreaView, View } from "react-native"
import { StatusBar } from 'expo-status-bar';
import styles from "./styles"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../..";

interface Props {
  appbar?: JSX.Element
  body?: JSX.Element
  bottom?: JSX.Element
  backgroundColor?: string
  float?: JSX.Element
  floatBottom?: number
  floatLocation?: "left" | "center" | "right" | undefined
}

export const Scaffold = ({
  appbar,
  body,
  bottom,
  backgroundColor = "ffffff",
  floatLocation = "right",
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
      {props.float && (
        <View style={[
          styles.floatContainer,
          {
            bottom: insets.bottom + (props.floatBottom || 15),
          },
          floatLocation == "left" && { left: 15 },
          floatLocation == "right" && { right: 15 },
          floatLocation == "center" && { left: 0, right: 0 },
        ]}>
          {props.float}
        </View>
      )}
      {bottom &&
        <SafeAreaView style={styles.bottom}>
          {bottom}
        </SafeAreaView>
      }
      <StatusBar />
    </View>
  );
}
