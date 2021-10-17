import React from "react"
import { useTheme } from "@emotion/react"
import { MListItemTitle, MorphList, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle } from "@andreciornavei/rn-essentials"
import { useNavigation } from "@react-navigation/native"
import { MorphListItemBaseType, MorphListLoadFnProps } from "../../../../src/components/MorphList/types"
import { MListItemSample } from "./components/MListItemSample"
import { MListItemParagraph } from "./components/MListItemParagraph"
import { MListItemButton } from "./components/MListItemButton"
import { Text, View } from "react-native"


export const _MorphList = (): JSX.Element => {

    const theme = useTheme()
    const { goBack } = useNavigation()

    const loadRecords = (): MorphListItemBaseType<any>[] => {
        return []
    }

    const handleLoadRecords = async (props: MorphListLoadFnProps): Promise<MorphListItemBaseType<any>[]> => {
        return await loadRecords()
    }

    return (
        <Scaffold
            backgroundColor={theme.color.white}
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Polymorphic List Render" />}
                    leads={[{
                        iconPack: "Feather",
                        iconName: "arrow-left",
                        color: theme.color.accentText,
                        action: goBack
                    }]}
                />
            }
            body={
                <MorphList
                    prefix={[
                        new MListItemTitle({
                            title: "Hello World",
                            titleSize: 32,
                            description: "This is the first custom render item"
                        }),
                        new MListItemSample({
                            label: "This is a success message composing the polymorphic flat list."
                        }),
                        new MListItemParagraph({
                            text: [
                                "As you can see, this FlatList called (MorphList) can render any component, it happens becouse it was implemented using abstract classes and polymorphism concept, so each item is responsible to render itself",
                                "Also, with this implementation, the flatlist can keep its self performance process, rendering only visible items on screen."
                            ]
                        }),
                        new MListItemButton({
                            label: "Back to main menu",
                            action: goBack
                        })
                    ]}
                    handleLoadRecords={handleLoadRecords}
                    disableReachedMessage={true}
                    separator={25}
                    paddingVertical={25}
                    footerComponent={<View><Text>I'm a footer component</Text></View>}
                    headerComponent={<View><Text>I'm a header component</Text></View>}
                />
            }
        />
    )
}