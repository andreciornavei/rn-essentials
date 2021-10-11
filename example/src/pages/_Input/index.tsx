import React from "react"
import { useTheme } from "@emotion/react"
import { FormInput, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Space } from "@andreciornavei/rn-essentials"
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
                    title={<ScaffoldAppBarTitle value="Form / Input" />}
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
                    <FormInput
                        marginTop={10}
                        label="Hello World - Above (default)"
                        labelPosition="above"
                        placeholder="Must stay above the form input..."
                    />
                    <FormInput
                        marginTop={15}
                        label="Hello World - Over"
                        labelPosition="over"
                        placeholder="Must stay over the form input..."
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>2 - Placeholder Effect</Text>
                    <FormInput
                        marginTop={10}
                        placeholder="nothing should happen when input filled..."
                        label="Hello World - Fixed (default)"
                        labelPosition="above"
                        labelEffect="fixed"
                    />
                    <FormInput
                        marginTop={25}
                        placeholder="label should apper when input filled..."
                        label="Hello World - Floating"
                        labelPosition="above"
                        labelEffect="floating"
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>3 - Border Styles</Text>
                    <FormInput
                        placeholder="should have an outline border (default)"
                        bordered="outline"
                    />
                    <FormInput
                        marginTop={15}
                        placeholder="should have only the border bottom"
                        bordered="underline"
                    />
                    <FormInput
                        marginTop={15}
                        placeholder="should not have a border"
                        bordered="none"
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>4 - Shape</Text>
                    <FormInput
                        marginTop={10}
                        label="Rounded"
                        placeholder="should have a rounded border radius"
                        shape="rounded"
                    />
                    <FormInput
                        marginTop={25}
                        label="Pill"
                        placeholder="should have a circular border radius"
                        shape="pill"
                    />
                    <FormInput
                        marginTop={25}
                        label="Flat"
                        placeholder="should not have a border radius"
                        shape="flat"
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>5 - Sizes</Text>
                    <FormInput
                        marginTop={10}
                        label="Tiny"
                        placeholder="should have a tiny size..."
                        size="tiny"
                    />
                    <FormInput
                        marginTop={25}
                        label="Small"
                        placeholder="should have a small size..."
                        size="small"
                    />
                    <FormInput
                        marginTop={25}
                        label="Regular (default)"
                        placeholder="should have a regular size..."
                        size="regular"
                    />
                    <FormInput
                        marginTop={25}
                        label="Medium"
                        placeholder="should have a medium size..."
                        size="medium"
                    />
                    <FormInput
                        marginTop={25}
                        label="Large"
                        placeholder="should have a large size..."
                        size="large"
                    />

                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>6 - Theme Colors</Text>
                    <FormInput
                        marginTop={10}
                        label="Primary"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="primary"
                    />
                    <FormInput
                        marginTop={25}
                        label="Secondary"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="secondary"
                    />
                    <FormInput
                        marginTop={25}
                        label="Success"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="success"
                    />
                    <FormInput
                        marginTop={25}
                        label="Danger"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="danger"
                    />
                    <FormInput
                        marginTop={25}
                        label="Warning"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="warning"
                    />
                    <FormInput
                        marginTop={25}
                        label="Info"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="info"
                    />
                    <FormInput
                        marginTop={25}
                        label="Link"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="link"
                    />
                    <FormInput
                        marginTop={25}
                        label="Dark"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="dark"
                    />
                    <FormInput
                        marginTop={25}
                        label="Light"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="light"
                    />
                    <FormInput
                        marginTop={25}
                        label="Muted"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="muted"
                    />
                    <FormInput
                        marginTop={25}
                        label="White"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="white"
                    />
                    <FormInput
                        marginTop={25}
                        label="Outline Parimary"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        shape="pill"
                        theme="outline-primary"
                    />
                    <FormInput
                        marginTop={25}
                        label="Outline Secondary"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-secondary"
                    />
                    <FormInput
                        marginTop={25}
                        label="Outline Success"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-success"
                    />
                    <FormInput
                        marginTop={25}
                        label="Outline Danger"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-danger"
                    />
                    <FormInput
                        marginTop={25}
                        label="Outline Warning"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-warning"
                    />
                    <FormInput
                        marginTop={25}
                        label="Outline Info"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-info"

                    />
                    <FormInput
                        marginTop={25}
                        label="Outline Link"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-link"
                    />
                    <FormInput
                        marginTop={25}
                        label="Outline Dark"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-dark"
                    />
                    <FormInput
                        marginTop={25}
                        label="Outline Light"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-light"
                    />
                    <FormInput
                        marginTop={25}
                        label="Outline Muted"
                        labelPosition="over"
                        labelEffect="fixed"
                        placeholder="Hello World"
                        theme="outline-muted"
                    />
                    <FormInput
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
                    <FormInput
                        marginTop={10}
                        label="CPF"
                        placeholder="Should format for CPF mask..."
                        maskType="cpf"
                    />
                    <FormInput
                        marginTop={25}
                        label="CNPJ"
                        placeholder="Should format for CNPJ mask..."
                        maskType="cnpj"
                    />
                    <FormInput
                        marginTop={25}
                        label="Credit Card Number"
                        placeholder="Should format for credit card mask..."
                        maskType="credit-card"
                    />
                    <FormInput
                        marginTop={25}
                        label="Cel Phone"
                        placeholder="Should format for cel-phone mask..."
                        maskType="cel-phone"
                    />
                    <FormInput
                        marginTop={25}
                        label="Date and Time"
                        placeholder="Should format for date and time mask..."
                        maskType="datetime"
                    />
                    <FormInput
                        marginTop={25}
                        label="Money"
                        placeholder="Should format for money mask..."
                        maskType="money"
                    />
                    <FormInput
                        marginTop={25}
                        label="Only numbers"
                        placeholder="Should format for only numbers mask..."
                        maskType="only-numbers"
                    />
                    <FormInput
                        marginTop={25}
                        label="ZipCode"
                        placeholder="Should format for zipcode mask..."
                        maskType="zip-code"
                    />
                    <FormInput
                        marginTop={25}
                        label="Password"
                        placeholder="Should format for password placeholder..."
                        secureTextEntry={true}
                    />
                     {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>8 - Icons & Actions</Text>
                    <FormInput
                        marginTop={10}
                        label="Left Icon"
                        placeholder="Should render a left icon..."
                        leftIcon={{
                            pack:"Feather",
                            name: "search"
                        }}
                    />
                    <FormInput
                        marginTop={25}
                        label="Right Icon"
                        placeholder="Should render a right icon..."
                        rightIcon={{
                            pack:"Feather",
                            name: "eye"
                        }}
                    />
                    <FormInput
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
                    <FormInput
                        marginTop={25}
                        label="Icon with action"
                        placeholder="Should render a right icon with action..."
                        rightIcon={{
                            pack:"Feather",
                            name: "arrow-right",
                            action: () => {}
                        }}
                    />
                    <FormInput
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