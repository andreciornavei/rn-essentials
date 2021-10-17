import React from "react"
import { useTheme } from "@emotion/react"
import { InputText, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Space } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
import { Text } from "react-native"

export const _Input = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()

    return (
        <Scaffold
            backgroundColor={theme.color.white}
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Form / Input Text" />}
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
                    <Text style={styles.label}>1 - Placeholder Positions</Text>
                    <InputText
                        marginTop={10}
                        label="Hello World - Above (default)"
                        labelPosition="above"
                        placeholder="Must stay above the form input..."
                    />
                    <InputText
                        marginTop={15}
                        label="Hello World - Over"
                        labelPosition="over"
                        placeholder="Must stay over the form input..."
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>2 - Placeholder Effect</Text>
                    <InputText
                        marginTop={10}
                        placeholder="nothing should happen when input filled..."
                        label="Hello World - Fixed (default)"
                        labelPosition="above"
                        labelEffect="fixed"
                    />
                    <InputText
                        marginTop={25}
                        placeholder="label should apper when input filled..."
                        label="Hello World - Floating"
                        labelPosition="above"
                        labelEffect="floating"
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>3 - Border Styles</Text>
                    <InputText
                        placeholder="should have an outline border (default)"
                        bordered="outline"
                    />
                    <InputText
                        marginTop={15}
                        placeholder="should have only the border bottom"
                        bordered="underline"
                    />
                    <InputText
                        marginTop={15}
                        placeholder="should not have a border"
                        bordered="none"
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>4 - Shape</Text>
                    <InputText
                        marginTop={10}
                        label="Rounded"
                        placeholder="should have a rounded border radius"
                        shape="rounded"
                    />
                    <InputText
                        marginTop={25}
                        label="Pill"
                        placeholder="should have a circular border radius"
                        shape="pill"
                    />
                    <InputText
                        marginTop={25}
                        label="Flat"
                        placeholder="should not have a border radius"
                        shape="flat"
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>5 - Sizes</Text>
                    <InputText
                        marginTop={10}
                        label="Tiny"
                        placeholder="should have a tiny size..."
                        size="tiny"
                    />
                    <InputText
                        marginTop={25}
                        label="Small"
                        placeholder="should have a small size..."
                        size="small"
                    />
                    <InputText
                        marginTop={25}
                        label="Regular (default)"
                        placeholder="should have a regular size..."
                        size="regular"
                    />
                    <InputText
                        marginTop={25}
                        label="Medium"
                        placeholder="should have a medium size..."
                        size="medium"
                    />
                    <InputText
                        marginTop={25}
                        label="Large"
                        placeholder="should have a large size..."
                        size="large"
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>6 - Theme Colors</Text>
                    <InputText
                        marginTop={10}
                        label="Primary"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="primary"
                    />
                    <InputText
                        marginTop={25}
                        label="Secondary"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="secondary"
                    />
                    <InputText
                        marginTop={25}
                        label="Success"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="success"
                    />
                    <InputText
                        marginTop={25}
                        label="Danger"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="danger"
                    />
                    <InputText
                        marginTop={25}
                        label="Warning"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="warning"
                    />
                    <InputText
                        marginTop={25}
                        label="Info"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="info"
                    />
                    <InputText
                        marginTop={25}
                        label="Link"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="link"
                    />
                    <InputText
                        marginTop={25}
                        label="Dark"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="dark"
                    />
                    <InputText
                        marginTop={25}
                        label="Light"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="light"
                    />
                    <InputText
                        marginTop={25}
                        label="Muted"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="muted"
                    />
                    <InputText
                        marginTop={25}
                        label="White"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="white"
                    />
                    <InputText
                        marginTop={25}
                        label="Outline Parimary"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        shape="pill"
                        theme="outline-primary"
                    />
                    <InputText
                        marginTop={25}
                        label="Outline Secondary"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-secondary"
                    />
                    <InputText
                        marginTop={25}
                        label="Outline Success"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-success"
                    />
                    <InputText
                        marginTop={25}
                        label="Outline Danger"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-danger"
                    />
                    <InputText
                        marginTop={25}
                        label="Outline Warning"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-warning"
                    />
                    <InputText
                        marginTop={25}
                        label="Outline Info"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-info"

                    />
                    <InputText
                        marginTop={25}
                        label="Outline Link"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-link"
                    />
                    <InputText
                        marginTop={25}
                        label="Outline Dark"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-dark"
                    />
                    <InputText
                        marginTop={25}
                        label="Outline Light"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-light"
                    />
                    <InputText
                        marginTop={25}
                        label="Outline Muted"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-muted"
                    />
                    <InputText
                        marginTop={25}
                        label="Outline White"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-white"
                    />
                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>7 - Masks</Text>
                    <InputText
                        marginTop={10}
                        label="CPF"
                        placeholder="Should format for CPF mask..."
                        maskType="cpf"
                    />
                    <InputText
                        marginTop={25}
                        label="CNPJ"
                        placeholder="Should format for CNPJ mask..."
                        maskType="cnpj"
                    />
                    <InputText
                        marginTop={25}
                        label="Credit Card Number"
                        placeholder="Should format for credit card mask..."
                        maskType="credit-card"
                    />
                    <InputText
                        marginTop={25}
                        label="Cel Phone"
                        placeholder="Should format for cel-phone mask..."
                        maskType="cel-phone"
                    />
                    <InputText
                        marginTop={25}
                        label="Date and Time"
                        placeholder="Should format for date and time mask..."
                        maskType="datetime"
                    />
                    <InputText
                        marginTop={25}
                        label="Money"
                        placeholder="Should format for money mask..."
                        maskType="money"
                    />
                    <InputText
                        marginTop={25}
                        label="Only numbers"
                        placeholder="Should format for only numbers mask..."
                        maskType="only-numbers"
                    />
                    <InputText
                        marginTop={25}
                        label="ZipCode"
                        placeholder="Should format for zipcode mask..."
                        maskType="zip-code"
                    />
                    <InputText
                        marginTop={25}
                        label="Password"
                        placeholder="Should format for password placeholder..."
                        secureTextEntry={true}
                    />
                     {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>8 - Icons & Actions</Text>
                    <InputText
                        marginTop={10}
                        label="Left Icon"
                        placeholder="Should render a left icon..."
                        leftIcon={{
                            pack:"Feather",
                            name: "search"
                        }}
                    />
                    <InputText
                        marginTop={25}
                        label="Right Icon"
                        placeholder="Should render a right icon..."
                        rightIcon={{
                            pack:"Feather",
                            name: "eye"
                        }}
                    />
                    <InputText
                        marginTop={25}
                        label="Left & Right Icon"
                        placeholder="Should render a left and right icon..."
                        leftIcon={{
                            pack:"Feather",
                            name: "search"
                        }}
                        rightIcon={{
                            pack:"Feather",
                            name: "eye"
                        }}
                    />
                    <InputText
                        marginTop={25}
                        label="Icon with action"
                        placeholder="Should render a right icon with action..."
                        rightIcon={{
                            pack:"Feather",
                            name: "arrow-right",
                            action: () => {}
                        }}
                    />
                    <InputText
                        marginTop={25}
                        label="Custom styled icon "
                        placeholder="Should render custom styled icon..."
                        rightIcon={{
                            pack:"Feather",
                            name: "arrow-right",
                            action: () => {},
                            color: theme.color.white,
                            style: {
                                backgroundColor: theme.color.primary,
                                borderRadius: 45,
                                marginRight: 6,
                                height: 30,
                                width: 30
                            }
                        }}
                    />
                </ScrollView>
            }
        />
    )
}