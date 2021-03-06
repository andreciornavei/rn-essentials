import React from "react"
import { useTheme } from "@emotion/react"
import { Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, TabNav } from "@andreciornavei/rn-essentials"
import { useNavigation } from "@react-navigation/native"
import { TabOne } from "./components/TabOne"
import { TabThree } from "./components/TabThree"
import { TabTwo } from "./components/TabTwo"

export const _TabNav = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()

    return (
        <Scaffold
            backgroundColor={theme.color.white}
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Bottom Tab Navigator" />}
                    leads={[{
                        iconPack: "Feather",
                        iconName: "arrow-left",
                        color: theme.color.accentText,
                        action: goBack
                    }]}
                />
            }
            body={
                <TabNav
                    theme="primary"
                    size="regular"
                    initialRouteName="/tab_home"
                    itemSelectedTextStyle={{ color: theme.color.success }}
                    routes={[
                        {
                            "name": "/tab_one",
                            "component": TabOne,
                            "options": {
                                "title": "tab one",
                                "iconPack": "MaterialCommunityIcons",
                                "iconName": "numeric-1"
                            }
                        },
                        {
                            "name": "/tab_two",
                            "component": TabTwo,
                            "options": {
                                "title": "tab two",
                                "iconPack": "MaterialCommunityIcons",
                                "iconName": "numeric-2",
                                "onPress": () => { console.log("PREVENTING...") }
                            }
                        },
                        {
                            "name": "/tab_three",
                            "component": TabThree,
                            "options": {
                                "title": "tab three",
                                "iconPack": "MaterialCommunityIcons",
                                "iconName": "numeric-3"
                            }
                        }
                    ]}
                />
            }
        />
    )
}