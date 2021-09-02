import React from "react"
import { FlexAlignType, View } from "react-native"
import styles from "./styles"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { ScaffoldAppBarActionProps } from "../../@types/ScaffoldAppBarActionProps";
import { ScaffoldAppBarAction } from "../ScaffoldAppBarAction";
import { useTheme } from "../../../..";

interface Props {
  title?: JSX.Element
  titleAlign?: FlexAlignType,
  actions?: Array<ScaffoldAppBarActionProps>
  leads?: Array<ScaffoldAppBarActionProps>
  shadow?: boolean
  touchable?: boolean
  backgroundColor?: string
}

export const APP_BAR_HEIGHT: number = 60

export const ScaffoldAppBar = ({
  title,
  titleAlign,
  actions = [],
  leads = [],
  shadow = true,
  touchable = false,
  ...props
}: Props): JSX.Element => {
  const insets = useSafeAreaInsets();
  const theme = useTheme()
  return (
    <View style={[styles.container, {
      height: 60 + insets.top,
      paddingTop: insets.top,
      borderBottomColor: shadow ? theme.color.shadow : theme.color.transparent,
      backgroundColor: props.backgroundColor || theme.color.white
    }]}>
      <View style={{
        flexDirection: "row",
        zIndex: 1,
      }}>
        {leads.map((props, index: number) => {
          return <ScaffoldAppBarAction
            key={`lead-${index}`}
            iconName={props.iconName}
            label={props.label}
            action={props.action}
            alert={props.alert}
            rounded={props.rounded}
            color={props.color}
            disabled={props.disabled}
          />
        })}
      </View>
      <View pointerEvents={touchable ? undefined : "none"} style={[
        styles.titleContainer,
        { alignItems: titleAlign || "center" }
      ]}>
        {title && title}
      </View>
      <View style={{
        flexDirection: "row"
      }}>
        {actions.map((props, index: number) => {
          return <ScaffoldAppBarAction
            key={`action-${index}`}
            iconPack={props.iconPack}
            iconName={props.iconName}
            label={props.label}
            action={props.action}
            alert={props.alert}
            rounded={props.rounded}
            color={props.color}
            disabled={props.disabled}
          />
        })}
      </View>
    </View>
  );
}
