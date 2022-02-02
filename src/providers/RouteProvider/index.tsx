import React, { ComponentType } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteWrap } from './wrap';
import { View } from 'react-native';
import { VoidProvider } from '../VoidProvider';


export interface RouteProps {
  initialRouteName: string
  innerProvider?: React.FC<{ children: JSX.Element }> | undefined
  routes: Array<{
    name: string
    component: React.FC
  }>
}

export const RouteProvider = (props: RouteProps): JSX.Element => {
  const Stack = createStackNavigator();

  const InnerProviders = props.innerProvider ? props.innerProvider : VoidProvider

  return (
    <NavigationContainer>
      <InnerProviders>
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
      </InnerProviders>
    </NavigationContainer>
  )
}
