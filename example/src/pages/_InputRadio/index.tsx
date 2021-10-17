import React from "react"
import { useTheme } from "@emotion/react"
import { InputRadio, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
import { Text } from "react-native"

export const _InputRadio = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()
    const [selected, setSelected] = React.useState<any[][]>([["first_option", true]])

    return (
        <Scaffold
            backgroundColor={theme.color.white}
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Form / Input Option" />}
                    leads={[{
                        iconPack: "Feather",
                        iconName: "arrow-left",
                        color: theme.color.accentText,
                        action: goBack
                    }]}
                />
            }
            body={
                <ScrollView contentContainerStyle={[styles.container]}>

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>1 - Single Option</Text>
                    <InputRadio
                        options={[
                            {
                                "label": "First option",
                                "value": "first_option"
                            },
                            {
                                "label": "Second option",
                                "value": "second_option"
                            },
                            {
                                "label": "Third option",
                                "value": "third_option"
                            }
                        ]}
                        value={selected}
                        onSelect={(value) => setSelected([[value, true]])}
                    />

                </ScrollView>
            }
        />
    )
}