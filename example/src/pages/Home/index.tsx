import React from "react"
import { useTheme } from "@emotion/react"
import { Text } from "react-native"
import { Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Action } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"

export const Home = (): JSX.Element => {

    const theme = useTheme()
    const { navigate } = useNavigation<any>()

    return (
        <Scaffold
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Home" />}
                    leads={[{
                        iconPack: "Feather",
                        iconName: "arrow-left",
                        color: theme.color.accentText,
                        action: () => { }
                    }]}
                    actions={[{
                        iconPack: "Feather",
                        iconName: "bell",
                        color: theme.color.accentText,
                        action: () => { }
                    }]}
                />
            }
            body={
                <ScrollView style={[styles.container]}>
                    <Text style={styles.title}>
                        Available Components
                    </Text>
                    <Text style={styles.descirption}>
                        This screen implements the acion component, take a look ;)
                    </Text>
                    <Action
                        iconPack="Ionicons"
                        iconName="list"
                        label="Accordion"
                        onPress={() => navigate("/component_accordion")}
                    />
                    <Action
                        iconPack="MaterialCommunityIcons"
                        iconName="gesture-double-tap"
                        label="Button"
                        onPress={() => navigate("/component_button")}
                    />
                </ScrollView>
            }
        />
    )
}