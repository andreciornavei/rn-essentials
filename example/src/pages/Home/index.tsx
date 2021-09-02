import React from "react"
import { useTheme } from "@emotion/react"
import { View, Text } from "react-native"
import { HelloWorld, Button, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle, useSheet } from "rn-essentials"
import { styles } from "./styles"
import { Space } from "../../../../src/components/Space"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export const Home = (): JSX.Element => {

    const theme = useTheme()
    const { openSheet } = useSheet()
    const insets = useSafeAreaInsets()

    const handleOpenSheet = () => {
        openSheet(
            <View style={{
                padding: 25,
                paddingBottom: 25 + insets.bottom,
                backgroundColor: theme.color.white,
                alignItems: "center"
            }}>
                <Text>Hello World</Text>
            </View>
        )
    }

    return (
        <Scaffold
            appbar={
                <ScaffoldAppBar
                    title={<ScaffoldAppBarTitle value="Home" />}
                    leads={[{
                        iconPack: "Feather",
                        iconName: "arrow-left",
                        color: theme.color.accentText,
                        action: () => { }
                    }]}
                    actions={[{
                        iconPack: "Feather",
                        iconName: "bell",
                        color: theme.color.accentText,
                        action: () => { }
                    }]}
                />
            }
            body={
                <View style={[styles.container]}>
                    <HelloWorld />
                    <Text style={{ color: theme.color.accentText }}>
                        Content from example app
                    </Text>
                    <Space height={15} />
                    <Button
                        label="Open Sheet"
                        theme="accent"
                        iconPack="Feather"
                        iconName="plus"
                        iconPosition="right"
                        center={true}
                        wrap={true}
                        iconColor={theme.color.white}
                        onPress={handleOpenSheet}
                    />
                </View>
            }
        />
    )
}