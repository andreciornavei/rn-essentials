import React from "react"
import { View } from "react-native"
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from "./components/TabBar"
import { TabNavProps } from "./types";
const Tab = createBottomTabNavigator();
export const TabNav = (props: TabNavProps) => {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName={props.initialRouteName}
                screenOptions={{ headerShown: false }}
                tabBar={(tabprops: BottomTabBarProps) => <TabBar {...tabprops} {...props} />}
            >
                {props.routes.map((route, index) => (
                    <Tab.Screen
                        key={`tab-nav-id-${index}`}
                        name={route.name}
                        component={route.component}
                        options={route.options}
                    />
                ))}
            </Tab.Navigator>
        </View>
    )
}