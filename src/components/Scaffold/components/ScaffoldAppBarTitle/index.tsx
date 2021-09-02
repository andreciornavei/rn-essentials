import React from "react"
import { Text } from "react-native"

interface Props {
  value: string
  color?: string
  space?: number
}

export const ScaffoldAppBarTitle = (props: Props): JSX.Element => {
  return (
    <Text style={{
      fontSize: 16,
      color: props.color || "#000000",
      letterSpacing: 1,
      paddingHorizontal: props.space
    }}>{props.value}</Text>
  )
}
