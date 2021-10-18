import React from "react"
import { useTheme } from "@emotion/react"
import { InputRadio, InputRadioMultipleValue, InputRadioOption, InputRadioSingleValue, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
import { Text } from "react-native"

const SAMPLE_OPTIONS: InputRadioOption[] = [
    {
        "label": "First option",
        "value": "first_option",
        "iconPack": "MaterialCommunityIcons",
        "iconName": "numeric-1",
        "iconSize": 21
    },
    {
        "label": "Second option",
        "value": "second_option",
        "iconPack": "MaterialCommunityIcons",
        "iconName": "numeric-2",
        "iconSize": 21
    },
    {
        "label": "Third option",
        "value": "third_option",
        "iconPack": "MaterialCommunityIcons",
        "iconName": "numeric-3",
        "iconSize": 21
    }
]


export const _InputRadio = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()
    const [selectedSingleValue, setSelectedSingleValue] = React.useState<InputRadioSingleValue>(undefined)
    const [selectedMultipleValue, setSelectedMultipleValue] = React.useState<InputRadioMultipleValue>(undefined)

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
                        mode="single"
                        options={SAMPLE_OPTIONS}
                        value={selectedSingleValue}
                        onSelect={setSelectedSingleValue}
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>2 - Multiple Options</Text>
                    <InputRadio
                        mode="multiple"
                        options={SAMPLE_OPTIONS}
                        value={selectedMultipleValue}
                        onSelect={setSelectedMultipleValue}
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>3 - Async Load Options</Text>
                    <InputRadio
                        mode="single"
                        options={[]}
                        value={selectedSingleValue}
                        loadOptions={async () => {
                            return SAMPLE_OPTIONS
                        }}
                        onSelect={setSelectedSingleValue}
                    />


                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>4 - Theming</Text>
                    <InputRadio
                        mode="single"
                        options={SAMPLE_OPTIONS}
                        value={selectedSingleValue}
                        onSelect={setSelectedSingleValue}
                        textColor={theme.color.muted}
                        selectedTextColor={theme.color.primary}
                    />
                </ScrollView>
            }
        />
    )
}