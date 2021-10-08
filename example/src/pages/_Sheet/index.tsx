import React from "react"
import { useTheme } from "@emotion/react"
import { View, Text } from "react-native"
import { Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Accordion, Action, useSheet, SheetConfirmation, SheetActions } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"

export const _Sheet = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()
    const { openSheet } = useSheet()

    return (
        <Scaffold
            backgroundColor={theme.color.white}
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Modals / Sheets" />}
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
                    <Action
                        iconPack="Ionicons"
                        iconName="list"
                        label="Sheet Confirmation"
                        onPress={() => openSheet(
                            <SheetConfirmation
                                title="Hello World"
                                message="This is a confirmation message"
                                onCancel={() => console.log("CANCEL CLICK!")}
                                onConfirm={() => console.log("CONFIRM CLICK!")}
                                cancelLabel="Cancel"
                                confirmLabel="Confirm"
                            />
                        )}
                    />
                    <Action
                        iconPack="Ionicons"
                        iconName="list"
                        label="Sheet Actions"
                        onPress={() => openSheet(
                            <SheetActions
                                title="Hello World"
                                closeLabel="Fechar"
                                actions={[
                                    { label: "Do stuff 1", action: async () => { console.log("Doing stuff 1...") } },
                                    { label: "Do stuff 2", action: async () => { console.log("Doing stuff 2...") } },
                                    { label: "Do stuff 3", action: async () => { console.log("Doing stuff 3...") } },
                                ]}
                            />
                        )}
                    />
                </ScrollView>
            }
        />
    )
}