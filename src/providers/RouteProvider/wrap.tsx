import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { AppBottomSheet } from "../SheetProvider/components/AppBottomSheet";
import { RouteProps } from ".";

export const RouteWrap = (props: RouteProps) => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator
        initialRouteName={props.initialRouteName}
        screenOptions={{
          headerShown: false
        }}>
        {props.routes.map((route, index) => (
          <Stack.Screen
            key={`screen-id-${index}`}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
      <AppBottomSheet />
    </>
  )
}
