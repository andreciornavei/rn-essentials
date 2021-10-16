import React from "react"
import { useTheme } from "@emotion/react"
import { Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, TabNav, TabPanel } from "@andreciornavei/rn-essentials"
import { useNavigation } from "@react-navigation/native"
import { TabOne } from "./components/TabOne"
import { TabThree } from "./components/TabThree"
import { TabTwo } from "./components/TabTwo"

export const _TabPanel = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()

    return (
        <Scaffold
            backgroundColor={theme.color.white}
            appbar={
                <ScaffoldAppBar
                    shadow={false}
                    title={<ScaffoldAppBarTitle value="Tabbed Panel" />}
                    leads={[{
                        iconPack: "Feather",
                        iconName: "arrow-left",
                        color: theme.color.accentText,
                        action: goBack
                    }]}
                />
            }
            body={
                <TabPanel
                    theme="white"
                    size="regular"
                    shadow={true}
                    itemCounterAnchor="outer"
                    itemSelectedIndicatorAnchor="inner"
                    itemDirection="row"
                    itemSelectedIndicatorVisible={true}
                    itemSelectedIndicatorStyle={{
                        left: 23 ,
                        right: 0,
                        bottom: -5,
                        height: 3,
                        borderRadius: 6,
                        backgroundColor: theme.color.accentText
                    }}
                    itemIconContainerStyle={{
                        width: 20,
                        height: 20, 
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    itemIconContainerSelectedStyle={{
                        backgroundColor: theme.color.danger,                        
                    }}
                    itemSelectedIconStyle={{
                        color: theme.color.white,
                        fontSize: 14,
                    }}
                    itemCounterContainerStyle={{
                        backgroundColor: theme.color.danger,
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        right: 3,
                        top: 5
                    }}
                    itemCounterTextStyle={{
                        color: theme.color.white,
                        fontSize: 12,
                        fontWeight: "bold"
                    }}
                    tabs={[
                        {
                            "component": TabOne,
                            "tab": {
                                "title": "My Order",
                                "iconPack": "Feather",
                                "iconName": "edit-3"
                            }
                        },
                        {
                            "component": TabTwo,
                            "tab": {
                                "title": "Kitchen",
                                "iconPack": "MaterialIcons",
                                "iconName": "kitchen"
                            }
                        },
                        {
                            "component": TabThree,
                            "tab": {
                                "title": "Table",
                                "counter": 15,
                                "iconPack": "MaterialCommunityIcons",
                                "iconName": "table-furniture"
                            }
                        }
                    ]}
                />
            }
        />
    )
}