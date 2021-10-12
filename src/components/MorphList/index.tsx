import React from "react"
import { ReviewType } from "../../types/ReviewType"
import { resolveErrors } from "../../utils/resolveErrors"
import { MorphListCore } from "./core"

import { MorphListLoadFnProps, MorphListItemBaseType } from "./types"

type Props = {
    reset_counter?: number
    handleLoadRecords: (props: MorphListLoadFnProps) => Promise<MorphListItemBaseType<any>[]>
    prefix?: MorphListItemBaseType<any>[]
    disableLoadingMessage?: boolean
    disableReachedMessage?: boolean
}

export const MorphList = (props: Props): JSX.Element => {

    const [loading, setLoading] = React.useState<boolean>(false)
    const [reached, setReached] = React.useState<boolean>(false)
    const [review, setReview] = React.useState<ReviewType | undefined>(undefined)
    const [startRecord, setStartRecord] = React.useState<number>(0)
    const [records, setRecords] = React.useState<MorphListItemBaseType<any>[]>([])

    const handleLoadRecords = (options: MorphListLoadFnProps) => {
        if (loading || (reached && options.reset == false)) return
        if (options.reset) setReached(false)
        if (options.reset) setStartRecord(0)
        setLoading(true)
        setReview(undefined)
        props.handleLoadRecords(options)
            .then((response) => {
                if ((options.reset || options.recordStartIndex == 0) && response.length == 0) {
                    setRecords(props.prefix ?? [])
                } else if (options.reset && response.length > 0) {
                    setRecords([...(props.prefix || []), ...response])
                } else if (response.length > 0) {
                    setRecords([...records, ...response])
                } else setReached(true)
                setStartRecord(options.recordStartIndex + options.recordPerPage)
            })
            .catch(error => {
                setReached(true)
                setReview(resolveErrors(error))
            })
            .finally(() => setLoading(false))
    }

    React.useEffect(() => {
        handleLoadRecords({
            reset: true,
            recordStartIndex: 0,
            recordPerPage: 10
        })
    }, [props.reset_counter])

    return (
        <MorphListCore
            data={records}
            separator={25}
            paddingVertical={25}
            handleLoadRecords={handleLoadRecords}
            loading={loading}
            reached={reached}
            recordsPerPage={10}
            startRecord={startRecord}
            emptyMessage="No results to show..."
            disableLoadingMessage={props.disableLoadingMessage}
            disableReachedMessage={props.disableReachedMessage}
        />
    )
}