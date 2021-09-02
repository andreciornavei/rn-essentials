import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { AppBottomSheet } from "../SheetProvider/components/AppBottomSheet";

interface Props {
  initialRouteName: string
  routes: Array<{
    name: string
    component: JSX.Element
  }>
}

export const RouteWrap = (props: Props) => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        initialRouteName={props.initialRouteName}
        screenOptions={{
          headerShown: false
        }}>
        {props.routes.map((route, index) => (
          <Stack.Screen key={`screen-id-${index}`} name={route.name} component={() => route.component} />
        ))}
      </Stack.Navigator>
      <AppBottomSheet />
    </>
  )
}
