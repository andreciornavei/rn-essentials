import React, { Ref } from "react"
import { ActivityIndicator, FlatList, FlatListProps, Text } from "react-native";
import { useTheme } from "../..";
import { ListFetcherLoadMoreProps } from "./types";

// Redecalare forwardRef
declare module "react" {
    function forwardRef<T, P = {}>(
        render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export type ListFectherFunctions<T> = {
    appendRecord(data: T): void
    reset: () => void
}

type OmitFlatListProps = "data" | "keyExtractor" | "refreshing" | "onRefresh" | "onEndReachedThreshold" | "onEndReached"

export interface ListFectcherProps<T> extends Omit<FlatListProps<T>, OmitFlatListProps> {
    limit?: number
    renderReached?: boolean
    disableLoadMore?: boolean
    disableLoadingMessage?: boolean
    disableReachedMessage?: boolean
    loadData: (props: ListFetcherLoadMoreProps) => Promise<T[]>
    onData?: (data: T[]) => void
    onRefresh?: () => void
}

export const ListFecther = React.forwardRef(<T extends any>({ renderReached = true, ...props }: ListFectcherProps<T>, ref: Ref<ListFectherFunctions<T>>): JSX.Element => {

    const theme = useTheme()
    const flatlistRef = React.createRef<FlatList<T>>()
    const [loading, setLoading] = React.useState<boolean>(false);
    const [reached, setReached] = React.useState<boolean>(false)
    const [start, setStart] = React.useState<number>(0)
    const [data, setData] = React.useState<T[]>([]);

    // ******************************************************** //
    // ** Render footer loading indicating automatic fetcher ** //
    // ******************************************************** //
    const renderFooterLoading = (): JSX.Element | null => {
        if (props.disableLoadingMessage || props.disableLoadMore) return null
        if ((start || 0) > 0 && loading)
            return <ActivityIndicator size="small" color={theme.color.primary} />
        if (!props.disableReachedMessage && reached)
            return <Text>No more records to load.</Text>
        return null
    }

    // ******************************************************** //
    // ** Function to load more data handling                ** //
    // ******************************************************** //
    const loadMoreData = (options: ListFetcherLoadMoreProps) => {
        if (loading || (reached && options.reset === false)) return
        if (options.reset) setReached(false)
        if (options.reset) setStart(0)
        setLoading(true);
        props.loadData(options).then((result) => {
            if ((options.reset || options.start === 0) && result.length === 0)
                setData([])
            else if (options.reset && result.length > 0)
                setData(result)
            else if (result.length > 0)
                setData([...data, ...result])
            if (result.length < (props.limit || 10)) setReached(true)
            setStart(options.start + options.limit)
        })
            .catch(_error => setReached(true))
            .finally(() => setLoading(false))
    }

    // ********************************************************* //
    // ** Exposing functions to parent component              ** //
    // ********************************************************* //
    React.useImperativeHandle(ref, () => ({
        // Expose appendRecord to be added dynamic from parent
        appendRecord(entry: T) {
            setData([entry, ...data])
        },
        // Expose reset to be called from parent
        reset() {
            flatlistRef.current?.scrollToOffset({ offset: 0, animated: false })
            loadMoreData({
                reset: true,
                start: 0,
                limit: props.limit || 10
            });
        }
    }));

    // ********************************************************* //
    // ** Send data to parent when list data modifies         ** //
    // ********************************************************* //
    React.useEffect(() => {
        props.onData && props.onData(data)
    }, [data])

    // ********************************************************* //
    // ** Call the first loadData                             ** //
    // ********************************************************* //
    React.useEffect(() => {
        loadMoreData({
            start: 0,
            limit: props.limit || 10,
            reset: true
        })
    }, [])

    return (
        <FlatList
            {...props}
            data={data}
            ref={flatlistRef}
            keyExtractor={(_, index) => `list-fetcher-item-${index}`}
            refreshing={loading}
            ListFooterComponent={props.ListFooterComponent || renderFooterLoading}
            onRefresh={() => {
                if (props.onRefresh) props.onRefresh()
                loadMoreData({
                    start: 0,
                    limit: props.limit || 10,
                    reset: true
                })
            }}
            onEndReachedThreshold={0.05}
            onEndReached={() => {
                if (props.disableLoadMore) return
                loadMoreData({
                    start: start,
                    limit: props.limit || 10,
                    reset: false
                })
            }}
        />
    )
})

