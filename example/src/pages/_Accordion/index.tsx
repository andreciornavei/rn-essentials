import React from "react"
import { useTheme } from "@emotion/react"
import { View, Text } from "react-native"
import { Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Accordion } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"

export const _Accordion = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()
    const [selected, setSelected] = React.useState<string>("first")

    return (
        <Scaffold
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Accordion" />}
                    leads={[{
                        iconPack: "Feather",
                        iconName: "arrow-left",
                        color: theme.color.accentText,
                        action: goBack
                    }]}
                />
            }
            body={
                <ScrollView style={[styles.container]}>
                    <Accordion
                        name="first"
                        placeholder="The first accordion tab"
                        value="The first accordion tab"
                        open={selected == "first"}
                        iconPack="MaterialCommunityIcons"
                        iconName="numeric-1"
                        onClick={setSelected}
                    >
                        <View style={styles.content}>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Sed tortor tortor, 
                                pulvinar ultrices pulvinar luctus, 
                                mollis ac sapien. Cras vel lorem varius 
                                nunc tempor congue. Ut et turpis facilisis, 
                                lobortis massa id, vestibulum ipsum. 
                                Sed porta vulputate purus, quis faucibus 
                                sapien pretium at. Ut venenatis mollis massa.
                            </Text>
                        </View>
                    </Accordion>
                    <Accordion
                        name="second"
                        placeholder="The second accordion tab"
                        value="The second accordion tab"
                        open={selected == "second"}
                        iconPack="MaterialCommunityIcons"
                        iconName="numeric-2"
                        onClick={setSelected}
                    >
                        <View style={styles.content}>
                            <Text>
                                Morbi quis massa nisi. Aenean vel aliquam purus. 
                                Sed faucibus sodales odio at vestibulum. 
                                Donec in nunc commodo, porttitor arcu semper, 
                                pretium dolor. Mauris in leo elementum metus 
                                condimentum eleifend nec sed enim. Morbi a 
                                tortor iaculis, ultricies est quis, rhoncus ipsum. 
                                Etiam et lacus a ligula accumsan ornare. 
                                Nam tempus nunc mollis, egestas nulla a, bibendum nisi.
                            </Text>
                        </View>
                    </Accordion>
                    <Accordion
                        name="third"
                        placeholder="The third accordion tab"
                        value="The third accordion tab"
                        open={selected == "third"}
                        iconPack="MaterialCommunityIcons"
                        iconName="numeric-3"
                        onClick={setSelected}
                    >
                        <View style={styles.content}>
                            <Text>
                            Ut quis fringilla erat. Sed lectus sapien, mattis ac augue eu, 
                            sodales euismod libero. Fusce pellentesque massa ornare 
                            libero varius bibendum. Nam sem turpis, tincidunt tempor 
                            enim id, dictum mattis metus. Proin justo ante, mollis 
                            efficitur nisl eu, rhoncus sollicitudin tellus. Ut congue 
                            nisi velit, ac dapibus est mattis id. Donec a odio tortor.
                            </Text>
                        </View>
                    </Accordion>
                </ScrollView>
            }
        />
    )
}