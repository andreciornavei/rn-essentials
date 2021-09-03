import { IconPackType } from "../../..";

export interface ScaffoldAppBarActionProps {
  iconPack?: IconPackType
  iconName?: string
  action: () => void
  label?: string
  alert?: number
  rounded?: boolean
  color?: string
  disabled?: boolean
}
