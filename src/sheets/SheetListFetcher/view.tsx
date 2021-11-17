import React from "react"
import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Button, InputText, ListFecther, ListFectherFunctions, Space, useSheet, useTheme } from "../.."
import { SheetListFetcherContext } from "./context"
import { createStyle } from "./styles"
import { SheetListFetcherProps } from "./types"

export const SheetListFetcherView = <T extends unknown>(props: SheetListFetcherProps<T>): JSX.Element => {

    const theme = useTheme()
    const { closeSheet } = useSheet()
    const insets = useSafeAreaInsets()
    const styles = createStyle(theme, insets, props.disableSheetHeader, props.disableSheetSearch, props.disableSheetFooter)
    const { searchControl, setSearchControl } = React.useContext(SheetListFetcherContext)
    
    return (
        <View style={styles.container}>
            {props.disableSheetHeader != true &&
                <View style={styles.header}>
                    <Text style={styles.header_title}>
                        {props.headerProps?.title || "Search"}
                    </Text>
                    {(props.headerProps?.closeable == undefined || props.headerProps?.closeable == true) &&
                        <Button
                            symetrycSize={32}
                            shape="pill"
                            theme="light"
                            leftIcon={{
                                pack: "Feather",
                                name: "x",
                                color: theme.color.dark,
                                size: 21
                            }}
                            onPress={closeSheet}
                        />
                    }
                </View>
            }
            {props.disableSheetSearch != true &&
                <View style={styles.search}>
                    <InputText
                        inputContainerStyle={styles.search_input}
                        inputStyle={styles.search_input_inner}
                        value={searchControl}
                        defaultValue={searchControl}
                        onChangeText={(value) => setSearchControl(value)}
                        onDebounce={(value) => {
                            props.onSearch && props.onSearch(value)
                        }}
                        rightIcon={{
                            pack: "Feather",
                            name: "search",
                            style: { paddingRight: 25 }
                        }}
                        {...props.searchProps}
                    />
                </View>
            }
            <View style={styles.body}>
                <ListFecther<T>
                    ref={props.listRef}
                    style={styles.list_container}
                    contentContainerStyle={styles.list}
                    {...props.listProps}
                />
            </View>
            {(props.disableSheetFooter != true) &&
                <View style={styles.footer}>
                    {props.footerComponent}
                </View>
            }
        </View>
    )
}