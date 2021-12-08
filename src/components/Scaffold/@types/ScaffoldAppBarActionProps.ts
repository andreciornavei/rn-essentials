import { TextStyle, ViewStyle } from "react-native";
import { IconPackType } from "../../..";

export interface ScaffoldAppBarActionProps {
  iconPack?: IconPackType
  iconName?: string
  action: () => void
  label?: string
  alert?: number
  alertStyle?: ViewStyle
  alertTextStyle?: TextStyle
  rounded?: boolean
  color?: string
  disabled?: boolean
}
