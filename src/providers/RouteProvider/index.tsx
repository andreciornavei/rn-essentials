import React, { ComponentType } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteWrap } from './wrap';


export interface RouteProps {
  initialRouteName: string
  routes: Array<{
    name: string
    component: React.FC
  }>
}

export const RouteProvider = (props: RouteProps): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="/"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/" children={(_) => (
          <RouteWrap
            initialRouteName={props.initialRouteName}
            routes={props.routes}
          />
        )} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
