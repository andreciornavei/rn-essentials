import React from "react"
import { useTheme } from "@emotion/react"
import { InputRadioOption, InputRadioSingleValue, InputSelect, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"

const SAMPLE_OPTIONS: InputRadioOption[] = [
    {
        "label": "Google Pay",
        "value": "google_pay",
        "rightIcon": {
            "pack": "Fontisto",
            "name": "google-wallet",
            "size": 21,
            "space": "auto"
        }
    },
    {
        "label": "Apple Pay",
        "value": "apple_pay",
        "rightIcon": {
            "pack": "FontAwesome5",
            "name": "apple-pay",
            "size": 21,
            "space": "auto"
        }
    },
    {
        "label": "Credit card",
        "value": "credit_card",
        "rightIcon": {
            "pack": "AntDesign",
            "name": "creditcard",
            "size": 21,
            "space": "auto"
        }
    }
]


export const _InputSelect = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()
    const [selectedSingleValue, setSelectedSingleValue] = React.useState<InputRadioSingleValue>(undefined)
  
    return (
        <Scaffold
            backgroundColor={theme.color.white}
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Form / Select" />}
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
                    <InputSelect
                        value={SAMPLE_OPTIONS.find((e => e.value == selectedSingleValue))?.label}
                        options={SAMPLE_OPTIONS}
                        onSelect={setSelectedSingleValue}
                        size="medium"
                        shape="rounded"
                        theme="outline-dark"
                        placeholder="Forma de pagamento"
                        containerStyle={{
                            borderWidth: 1,
                            borderColor: theme.color.dark
                        }}
                    />
                </ScrollView>
            }
        />
    )
}