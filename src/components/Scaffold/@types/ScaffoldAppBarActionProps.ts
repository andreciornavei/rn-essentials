import { IconPackType } from "../../Icon";

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
