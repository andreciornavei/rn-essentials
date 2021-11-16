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
        "rightIcon": {
            pack: "MaterialCommunityIcons",
            name: "numeric-1",
            space: "auto"
        }
    },
    {
        "label": "Second option",
        "value": "second_option",
        "rightIcon": {
            pack: "MaterialCommunityIcons",
            name: "numeric-2",
            space: "auto"
        }
    },
    {
        "label": "Third option",
        "value": "third_option",
        "rightIcon": {
            pack: "MaterialCommunityIcons",
            name: "numeric-3",
            space: "auto"
        }
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
                        selectedOptions={{
                            theme: "primary",
                            shape: "flat",
                            leftIcon: {
                                pack: "Ionicons",
                                name: "radio-button-on",
                                space: 15
                            }
                        }}
                        unselectedOptions={{
                            theme: "light",
                            shape: "flat",
                            leftIcon: {
                                pack: "Ionicons",
                                name: "radio-button-off",
                                space: 15
                            }
                        }}
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>2 - Multiple Options</Text>
                    <InputRadio
                        mode="multiple"
                        options={SAMPLE_OPTIONS}
                        value={selectedMultipleValue}
                        onSelect={setSelectedMultipleValue}
                        selectedOptions={{
                            theme: "primary"
                        }}
                        unselectedOptions={{
                            theme: "white"
                        }}
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
                        selectedOptions={{
                            theme: "primary"
                        }}
                        unselectedOptions={{
                            theme: "white"
                        }}
                    />


                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>4 - Theming</Text>
                    <InputRadio
                        mode="single"
                        options={SAMPLE_OPTIONS}
                        value={selectedSingleValue}
                        onSelect={setSelectedSingleValue}
                        selectedOptions={{
                            theme: "primary"
                        }}
                        unselectedOptions={{
                            theme: "white"
                        }}
                    />
                </ScrollView>
            }
        />
    )
}