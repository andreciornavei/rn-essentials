import React from "react"
import { ActivityIndicator, Text, FlatList } from "react-native"
import { useTheme } from "../.."
import { Empty } from "../Empty"
import { Space } from "../Space"
import { createStyle } from "./styles"
import { MorphListLoadFnProps, MorphListItemBaseType } from "./types"

interface Props {
    reached: boolean
    loading: boolean
    startRecord: number
    recordsPerPage: number
    separator?: number
    handleLoadRecords: (props: MorphListLoadFnProps) => void
    data: Array<MorphListItemBaseType<any>>
    emptyMessage?: string
    emptyComponent?: JSX.Element
    footerComponent?: JSX.Element
    headerComponent?: JSX.Element
    loadingMessage?: string
    paddingVertical?: number
    enableLoadMore?: boolean
    inverted?: boolean
    disableLoadingMessage?: boolean
    disableReachedMessage?: boolean
    onRefresh?: () => void
}

export const MorphListCore = ({ enableLoadMore = true, ...props }: Props): JSX.Element => {

    const theme = useTheme()
    const styles = createStyle(theme)

    const renderFooterLoading = (): JSX.Element | null => {
        if (props.disableLoadingMessage == true || enableLoadMore == false) return null
        if ((props.startRecord || 0) > 0 && props.loading) {
            return (
                <ActivityIndicator size="small" color={theme.color.primary} />
            )
        }
        if (props.disableReachedMessage == false && props.reached) {
            return (
                <Text style={styles.listFooterLabel}>No more records to load.</Text>
            )
        }
        return null
    }

    if (props.startRecord == 0 && props.loading) return <ActivityIndicator size="small" color={theme.color.primary} />

    const stickyHeaderIndices = React.useMemo((): number[] => {
        const stickers: number[] = []
        props.data.forEach((_item, index) => {
            if (_item.sticky == true) {
                stickers.push(props.headerComponent ? index + 1 : index)
            }
        })
        return stickers
    }, [props.data])

    return (
        <FlatList
            data={props.data}
            renderItem={(line) => (line.item as MorphListItemBaseType<any>).render(line.index)}
            stickyHeaderIndices={stickyHeaderIndices}
            keyExtractor={(_, index) => `morph-flatlist-idx-${index}`}
            contentContainerStyle={[
                styles.list,
                props.data.length == 0 && { flex: 1 },
                props.paddingVertical != undefined && { paddingVertical: props.paddingVertical }
            ]}
            ItemSeparatorComponent={() => <Space height={props.separator} />}
            ListEmptyComponent={props.emptyComponent || <Empty message={props.emptyMessage || "Empty..."} />}
            ListFooterComponentStyle={styles.listFooter}
            ListFooterComponent={props.footerComponent || renderFooterLoading}
            ListHeaderComponent={props.headerComponent}
            refreshing={props.loading}
            inverted={props.inverted && props.data.length > 0 || false}
            onRefresh={() => {
                if (props.onRefresh) props.onRefresh()
                props.handleLoadRecords({
                    recordStartIndex: 0,
                    recordPerPage: props.recordsPerPage,
                    reset: true
                })
            }}
            onEndReachedThreshold={0.05}
            onEndReached={() => {
                if (enableLoadMore == true) {
                    props.handleLoadRecords({
                        recordStartIndex: props.startRecord,
                        recordPerPage: props.recordsPerPage,
                        reset: false
                    })
                }
            }}
        />
    )
}