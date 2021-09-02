import React from "react"
import { useTheme } from "@emotion/react"
import { View, Text } from "react-native"
import { HelloWorld, Button, Scaffold, ScaffoldAppBar, ScaffoldAppBarTitle } from "rn-essentials"
import { styles } from "./styles"
import { Space } from "../../../../src/components/Space"

export const Home = (): JSX.Element => {

    const theme = useTheme()

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
                        label="Hello World"
                        theme="accent"
                        iconPack="Feather"
                        iconName="plus"
                        iconPosition="right"
                        center={true}
                        wrap={true}
                        iconColor={theme.color.white}
                    />
                </View>
            }
        />
    )
}