import React from "react"
import { useTheme } from "@emotion/react"
import { InputSheet, InputText, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Space } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
import { Text } from "react-native"
import produce from "immer"
import _ from "lodash"

type SampleFormType = {
    name: string
}

export const _InputSheet = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()


    const [form, setForm] = React.useState<SampleFormType>({} as SampleFormType)
    const handleUpdateForm = (fields: Object) => {
        setForm(produce(form, draft => {
            for (const field in fields) {
                _.set(draft, field, _.get(fields, field))
            }
        }))
    }

    return (
        <Scaffold
            backgroundColor={theme.color.white}
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Input Sheet" />}
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
                    <Text style={styles.label}>1 - Sizes</Text>
                    <InputSheet
                        size="tiny"
                        inputType="text"
                        label="Hello World"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity"
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        size="small"
                        marginTop={15}
                        inputType="text"
                        label="Hello World"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity"
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        size="regular"
                        marginTop={15}
                        inputType="text"
                        label="Hello World"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity"
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        size="medium"
                        marginTop={15}
                        inputType="text"
                        label="Hello World"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity"
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        size="large"
                        marginTop={15}
                        inputType="text"
                        label="Hello World"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity"
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>2 - Themes</Text>
                    <InputSheet
                        theme="primary"
                        inputType="text"
                        label="Primary"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="secondary"
                        marginTop={15}
                        inputType="text"
                        label="Secondary"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="success"
                        marginTop={15}
                        inputType="text"
                        label="Success"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="danger"
                        marginTop={15}
                        inputType="text"
                        label="Danger"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="warning"
                        marginTop={15}
                        inputType="text"
                        label="Warning"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="info"
                        marginTop={15}
                        inputType="text"
                        label="Info"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="link"
                        marginTop={15}
                        inputType="text"
                        label="Link"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="light"
                        marginTop={15}
                        inputType="text"
                        label="Light"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="dark"
                        marginTop={15}
                        inputType="text"
                        label="Dark"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="muted"
                        marginTop={15}
                        inputType="text"
                        label="Muted"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="white"
                        marginTop={15}
                        inputType="text"
                        label="White"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-primary"
                        marginTop={15}
                        inputType="text"
                        label="Outline Primary"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-secondary"
                        marginTop={15}
                        inputType="text"
                        label="Outline Secondary"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-success"
                        marginTop={15}
                        inputType="text"
                        label="Outline Success"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-danger"
                        marginTop={15}
                        inputType="text"
                        label="Outline Danger"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-warning"
                        marginTop={15}
                        inputType="text"
                        label="Outline Warning"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-info"
                        marginTop={15}
                        inputType="text"
                        label="Outline Info"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-link"
                        marginTop={15}
                        inputType="text"
                        label="Outline Link"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-light"
                        marginTop={15}
                        inputType="text"
                        label="Outline Light"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-dark"
                        marginTop={15}
                        inputType="text"
                        label="Outline Dark"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-muted"
                        marginTop={15}
                        inputType="text"
                        label="Outline Muted"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        theme="outline-white"
                        marginTop={15}
                        inputType="text"
                        label="Outline White"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity",
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>3 - Shapes</Text>
                    <InputSheet
                        shape="flat"
                        inputType="text"
                        label="Shape Flat"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity"
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        shape="rounded"
                        marginTop={15}
                        inputType="text"
                        label="Shape Rounded"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity"
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    <InputSheet
                        shape="pill"
                        marginTop={15}
                        inputType="text"
                        label="Shape Pill"
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity"
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>4 - Custom Style</Text>
                    <InputSheet
                        inputType="text"
                        shape="flat"
                        label="My custom style"
                        instruction="Informe seu nome aqui..."
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{
                            theme: "outline-danger",
                            value: form.name
                        }}
                        styles={{
                            container: {
                                borderWidth: 0,
                                borderBottomWidth: 2,
                                borderBottomColor: "#7B1FA2",
                                backgroundColor: "#CE93D8"
                            },
                            label: {
                                color: "#7B1FA2",
                            },
                            value: {
                                color: "#ffffff"
                            },
                            placeholder: "#ffffff80",
                        }}
                        leftIcon={{
                            pack: "Feather",
                            name: "clock",
                            color: "#7B1FA2",
                            size: 21
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "arrow-right",
                            color: theme.color.white,
                            size: 16
                        }}
                        sheetStyle={{
                            theme: "white",
                            shape: "flat"
                        }}
                        buttonStyle={{
                            theme: "danger",
                            shape: "flat"
                        }}
                    />
                    {/*****************************************************/}
                    {/*****************************************************/}
                    <Text style={styles.label}>5 - Input Types</Text>
                    <InputSheet
                        inputType="text"
                        label="Input Type Text"
                        instruction="Informe seu nome aqui..."
                        value={form.name}
                        onChange={(value) => handleUpdateForm({ name: value })}
                        inputProps={{ value: form.name }}
                        leftIcon={{
                            pack: "Feather",
                            name: "activity"
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "chevron-right"
                        }}
                    />
                </ScrollView>
            }
        />
    )
}