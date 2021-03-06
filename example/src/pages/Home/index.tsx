import React from "react"
import { useTheme } from "@emotion/react"
import { Text } from "react-native"
import { Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Action, useApi, Button } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
import { AuthApi } from "./../../services/api/Auth"
import { useAppData } from "./../../providers/AppDataProvider"

export const Home = (): JSX.Element => {

    const theme = useTheme()
    const { navigateToAccordion } = useAppData()
    const { navigate } = useNavigation<any>()

    const api = useApi()
    const handleAction = () => {
        api.instanceOf<AuthApi>(AuthApi).login()
    }

    return (
        <Scaffold
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Home" />}
                    actions={[{
                        iconPack: "Feather",
                        iconName: "bell",
                        color: theme.color.accentText,
                        alert: 5,
                        alertStyle: { backgroundColor: theme.color.danger, top: 20 },
                        alertTextStyle: { fontWeight: "bold" },
                        action: () => { }
                    }]}
                />
            }
            body={
                <ScrollView contentContainerStyle={[styles.container]}>
                    <Text style={styles.title}>
                        Available Components
                    </Text>
                    <Text style={styles.descirption}>
                        This screen implements the action component, take a look ;)
                    </Text>
                    <Action
                        iconPack="Ionicons"
                        iconName="list"
                        label="Accordion"
                        onPress={() => navigateToAccordion()}
                    />
                    <Action
                        iconPack="MaterialCommunityIcons"
                        iconName="gesture-double-tap"
                        label="Button"
                        onPress={() => navigate("/component_button")}
                    />
                    <Action
                        iconPack="Entypo"
                        iconName="popup"
                        label="Modals / Sheets"
                        onPress={() => navigate("/component_sheet")}
                    />
                    <Action
                        iconPack="MaterialIcons"
                        iconName="input"
                        label="Form / Input Text"
                        onPress={() => navigate("/component_input")}
                    />
                    <Action
                        iconPack="Fontisto"
                        iconName="radio-btn-active"
                        label="Form / Input Radio"
                        onPress={() => navigate("/component_input_radio")}
                    />
                    <Action
                        iconPack="Fontisto"
                        iconName="checkbox-active"
                        label="Form / Checkbox"
                        onPress={() => navigate("/component_input_checkbox")}
                    />
                    <Action
                        iconPack="MaterialCommunityIcons"
                        iconName="form-dropdown"
                        label="Form / Select"
                        onPress={() => navigate("/component_input_select")}
                    />
                    <Action
                        iconPack="Ionicons"
                        iconName="podium-outline"
                        label="Bottom Tab Navigator"
                        onPress={() => navigate("/component_tabnav")}
                    />
                    <Action
                        iconPack="MaterialCommunityIcons"
                        iconName="format-list-bulleted-type"
                        label="Polymorphic List Render"
                        onPress={() => navigate("/component_morphlist")}
                    />
                    <Action
                        iconPack="MaterialCommunityIcons"
                        iconName="playlist-plus"
                        label="List Fetcher"
                        onPress={() => navigate("/component_listfetcher")}
                    />
                    <Action
                        iconPack="AntDesign"
                        iconName="form"
                        label="Input Sheet"
                        onPress={() => navigate("/component_inputsheet")}
                    />
                    <Action
                        iconPack="MaterialCommunityIcons"
                        iconName="tab"
                        label="Tabbed Panel"
                        onPress={() => navigate("/component_tabpanel")}
                    />
                    <Action
                        iconPack="Feather"
                        iconName="activity"
                        label="Testing api provider"
                        onPress={() => handleAction()}
                    />

                </ScrollView>
            }
            float={<Button theme="dark" label="Floating button" shape="pill" />}
            floatLocation="center"
            floatBottom={25}
        />
    )
}