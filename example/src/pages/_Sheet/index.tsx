import React from "react"
import { useTheme } from "@emotion/react"
import { Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Accordion, Action, useSheet, SheetConfirmation, SheetActions, SheetInputText, SheetListFetcher, ListFetcherLoadMoreProps, Space, SheetListFetcherProps, ListFectherFunctions, Button } from "@andreciornavei/rn-essentials"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
import axios from "axios"
import { Text, View } from "react-native"

type ItemType = {
    name: string
    url: string
}

export const _Sheet = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()
    const { openSheet } = useSheet()
    const listRef = React.createRef<ListFectherFunctions<ItemType>>()

    const loadData = async (props: ListFetcherLoadMoreProps): Promise<ItemType[]> => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${props.limit}&offset=${props.start}`)
            .then(response => response.data.results as ItemType[])
    }

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
                    <Action
                        iconPack="Ionicons"
                        iconName="list"
                        label="Sheet Input Text"
                        onPress={() => openSheet(
                            <SheetInputText
                                title="Hello World"
                                buttonLabel="Confirmar"
                                inputTextProps={{
                                    placeholder: "Hello World Placeholder..."
                                }}
                                onChange={(value) => { }}
                            />
                        )}
                    />
                    <Action
                        iconPack="MaterialCommunityIcons"
                        iconName="text-search"
                        label="Sheet Search List Fetcher"
                        onPress={() => openSheet(
                            <SheetListFetcher<ItemType>
                                listRef={listRef}
                                onSearch={(value) => {
                                    console.log("RUNNING SEARCH DEBOUNCE ->", value)
                                    listRef.current?.reset()
                                }}
                                disableSheetHeader={false}
                                disableSheetSearch={false}
                                disableSheetFooter={false}
                                footerComponent={(
                                    <View style={{
                                        width: "100%",
                                        paddingHorizontal: 25,
                                        paddingTop: 10
                                    }}>
                                        <Button
                                            label="FECHAR"
                                            size="medium"
                                            theme="dark"
                                            shape="flat"
                                            center={true}
                                            containerStyle={{
                                                alignSelf: "stretch"                                                
                                            }}
                                        />
                                    </View>
                                )}
                                headerProps={{
                                    closeable: true,
                                    title: "Pokémons"
                                }}
                                searchProps={{
                                    theme: "dark",
                                    placeholder: "Encontre o seu pokémon...",
                                    bordered: "underline"
                                }}
                                listProps={{
                                    loadData: loadData,
                                    limit: 25,
                                    ItemSeparatorComponent: () => <Space height={25} />,
                                    renderItem: (item) => (
                                        <View style={{
                                            padding: 15,
                                            borderWidth: 1,
                                            borderColor: theme.color.shadow,
                                        }}>
                                            <Text>
                                                {item.item.name}
                                            </Text>
                                        </View>
                                    )
                                }}

                            />
                        )}
                    />
                </ScrollView>
            }
        />
    )
}