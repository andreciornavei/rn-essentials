import React, { createRef, useRef } from "react"
import { useTheme } from "@emotion/react"
import { ListFecther, ListFectherFunctions, ListFetcherLoadMoreProps, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, Space } from "@andreciornavei/rn-essentials"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { Image, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

type ItemType = {
    name: string
    url: string
}

export const _ListFetcher = (): JSX.Element => {

    const ref = createRef<ListFectherFunctions<ItemType>>()

    const theme = useTheme()
    const insets = useSafeAreaInsets()
    const { goBack } = useNavigation()
    const [total, setTotal] = React.useState<number>(0)

    const loadData = async (props: ListFetcherLoadMoreProps): Promise<ItemType[]> => {
        return axios.get(`https://pokeapi.co/api/v2/ability/?limit=${props.limit}&offset=${props.start}`)
            .then(response => response.data.results as ItemType[])
    }

    return (
        <Scaffold
            backgroundColor={theme.color.white}
            appbar={
                <ScaffoldAppBar
                    titleAlign="flex-start"
                    title={<ScaffoldAppBarTitle value="List Fetcher" space={64} />}
                    leads={[{
                        iconPack: "Feather",
                        iconName: "arrow-left",
                        color: theme.color.accentText,
                        action: goBack
                    }]}
                    actions={[{
                        label: String(total),
                        action: () => { }
                    }, {
                        iconPack: "Ionicons",
                        iconName: "refresh",
                        action: () => ref.current?.reset()
                    }, {
                        iconPack: "Feather",
                        iconName: "plus",
                        action: () => ref.current?.appendRecord({ name: "Dynamic added", url: ""})
                    }]}
                />
            }
            body={
                <ListFecther<ItemType>
                    ref={ref}
                    loadData={loadData}
                    onData={(data) => setTotal(data.length)}
                    limit={50}
                    contentContainerStyle={{
                        paddingTop: 15,
                        paddingBottom: insets.bottom + 15,
                        paddingHorizontal: 15
                    }}
                    ItemSeparatorComponent={() => <Space height={15} />}
                    renderItem={(item) => (
                        <View style={{
                            padding: 15,
                            borderWidth: 1,
                            borderColor: theme.color.shadow,
                        }}>
                            <Text>
                                {item.item.name}
                            </Text>
                        </View>
                    )}
                />
            }
        />
    )
}