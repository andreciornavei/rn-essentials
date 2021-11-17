import React from "react"
import { useTheme } from "@emotion/react"
import { Checkbox, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Space } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
import { Text, View } from "react-native"

export const _InputCheckbox = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()

    const [checked, setChecked] = React.useState<boolean>(true)

    return (
        <Scaffold
            backgroundColor={theme.color.white}
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Form / Checkbox" />}
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

                    <Text style={styles.description}>All buttons implements the ripple effect.</Text>

                    <Text style={styles.label}>1 - Default button with label</Text>
                    <Checkbox checked={checked} onChangeValue={setChecked} label="default checkbox" />
                    <Space height={5} />
                    <Checkbox
                        checked={checked}
                        onChangeValue={setChecked}
                        label="customized checkbox"
                        color="red"
                        unselectedColor="cyan"
                        backgroundColor="black"
                        shape="rounded"
                        size="small"
                        style={{ label: { fontSize: 14 } }}
                    />

                    <Text style={styles.label}>1 - Themes</Text>
                    <View style={styles.group}>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="primary" theme="primary" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="secondary" theme="secondary" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="success" theme="success" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="danger" theme="danger" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="warning" theme="warning" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="info" theme="info" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="link" theme="link" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="light" theme="light" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="dark" theme="dark" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="muted" theme="muted" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="white" theme="white" />
                        </View>
                    </View>
                    <Text style={styles.label}>2 - Sizes</Text>
                    <View style={styles.group}>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="Larger size" size="large" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="Medium size" size="medium" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="Regular size" size="regular" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="Small size" size="small" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="Tiny size" size="tiny" />
                        </View>
                    </View>
                    <Text style={styles.label}>3 - Shapes</Text>
                    <View style={styles.group}>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="Flat shape" shape="flat" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="Rounded shape" shape="rounded" />
                        </View>
                        <View style={styles.button_space}>
                            <Checkbox checked={checked} onChangeValue={setChecked} label="Pill shape" shape="pill" />
                        </View>
                    </View>
                </ScrollView >
            }
        />
    )
}