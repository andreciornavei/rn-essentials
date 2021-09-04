import React from "react"
import { useTheme } from "@emotion/react"
import { View, Text } from "react-native"
import { Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Accordion, Button, Divider, Space } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"

export const _Button = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()

    return (
        <Scaffold
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Button" />}
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

                    <Text style={styles.label}>1 - Default button with text centered</Text>
                    <Button label="default button" theme="primary" center={true} />

                    <Text style={styles.label}>1 - Themes</Text>
                    <View style={styles.group}>
                        <View style={styles.button_space}>
                            <Button label="primary" theme="primary" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="secondary" theme="secondary" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="success" theme="success" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="danger" theme="danger" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="warning" theme="warning" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="info" theme="info" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="link" theme="link" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="light" theme="light" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="dark" theme="dark" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="muted" theme="muted" center={true} wrap={true} />
                        </View>
                    </View>

                    <Text style={styles.label}>2 - Outline Themes</Text>
                    <View style={styles.group}>
                        <View style={styles.button_space}>
                            <Button label="primary" theme="outline-primary" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="secondary" theme="outline-secondary" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="success" theme="outline-success" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="danger" theme="outline-danger" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="warning" theme="outline-warning" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="info" theme="outline-info" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="link" theme="outline-link" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="light" theme="outline-light" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="dark" theme="outline-dark" center={true} wrap={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="muted" theme="outline-muted" center={true} wrap={true} />
                        </View>
                    </View>

                    <Text style={styles.label}>3 - Button sizes</Text>
                    <View style={styles.group}>
                        <View style={styles.button_space}>
                            <Button label="Larger size" theme="primary" size="large" wrap={true} center={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="Medium size" theme="primary" size="medium" wrap={true} center={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="Regular size" theme="primary" size="regular" wrap={true} center={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="Small size" theme="primary" size="small" wrap={true} center={true} />
                        </View>
                        <View style={styles.button_space}>
                            <Button label="Tiny size" theme="primary" size="tiny" wrap={true} center={true} />
                        </View>
                    </View>

                    <Text style={styles.label}>4 - Button shapes</Text>
                    <View style={styles.group}>
                        <View style={styles.button_space}>
                            <Button
                                label="Flat shape"
                                theme="primary"
                                shape="flat"
                                wrap={true}
                                center={true}
                            />
                        </View>
                        <View style={styles.button_space}>
                            <Button
                                label="Rounded shape"
                                theme="primary"
                                shape="rounded"
                                wrap={true}
                                center={true}
                            />
                        </View>
                        <View style={styles.button_space}>
                            <Button
                                label="Pill shape"
                                theme="primary"
                                shape="pill"
                                wrap={true}
                                center={true}
                            />
                        </View>
                    </View>

                    <Text style={styles.label}>3 - Button with only icon / images</Text>
                    <View style={styles.group}>
                        <View style={styles.button_space}>
                            <Button
                                theme="primary"
                                wrap={true}
                                center={true}
                                leftIcon={{
                                    pack: "Feather",
                                    name: "github"
                                }}
                            />
                        </View>
                        <View style={styles.button_space}>
                            <Button
                                theme="primary"
                                wrap={true}
                                center={true}
                                leftImage={{ src: require("./../../../assets/favicon.png") }}
                            />
                        </View>
                    </View>

                    <Text style={styles.label}>4 - Button with loading property enabled</Text>
                    <View style={{ width: "100%", alignItems: "center" }}>
                        <Button label="loading..." theme="primary" wrap={true} center={true} loading={true} />
                    </View>

                    <Text style={styles.label}>5 - Button with disabled property on</Text>
                    <View style={{ width: "100%", alignItems: "center" }}>
                        <Button label="disabled button" theme="primary" wrap={true} center={true} disabled={true} />
                    </View>

                    <Text style={styles.label}>6 - Button with side icon</Text>
                    <View style={styles.group}>
                        <View style={styles.button_space}>
                            <Button
                                label="left"
                                theme="primary"
                                leftIcon={{
                                    pack: "Feather",
                                    name: "github"
                                }}
                                wrap={true}
                                center={true}
                            />
                        </View>
                        <View style={styles.button_space}>
                            <Button
                                label="right"
                                theme="primary"
                                leftIcon={{
                                    pack: "Feather",
                                    name: "github"
                                }}
                                rightIcon={{
                                    pack: "Feather",
                                    name: "github"
                                }}
                                wrap={true}
                                center={true}
                            />
                        </View>
                        <View style={styles.button_space}>
                            <Button
                                label="both"
                                theme="primary"
                                leftIcon={{
                                    pack: "Feather",
                                    name: "github"
                                }}
                                rightIcon={{
                                    pack: "Feather",
                                    name: "github"
                                }}
                                wrap={true}
                                center={true}
                            />
                        </View>
                    </View>

                    <Text style={styles.label}>7 - Button with side image</Text>
                    <View style={styles.group}>
                        <View style={styles.button_space}>
                            <Button
                                label="left"
                                theme="primary"
                                leftImage={{ src: require("./../../../assets/favicon.png") }}
                                wrap={true}
                                center={true}
                            />
                        </View>
                        <View style={styles.button_space}>
                            <Button
                                label="right"
                                theme="primary"
                                rightImage={{ src: require("./../../../assets/favicon.png") }}
                                wrap={true}
                                center={true}
                            />
                        </View>
                        <View style={styles.button_space}>
                            <Button
                                label="both"
                                theme="primary"
                                leftImage={{ src: require("./../../../assets/favicon.png") }}
                                rightImage={{ src: require("./../../../assets/favicon.png") }}
                                wrap={true}
                                center={true}
                            />
                        </View>
                    </View>

                </ScrollView >
            }
        />
    )
}