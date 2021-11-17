import React from "react"
import { SheetListFetcherController } from "./controller"
import { SheetListFetcherProps } from "./types"
import { SheetListFetcherView } from "./view"
export const SheetListFetcher = <T extends unknown>(props: SheetListFetcherProps<T>): JSX.Element => {
    return (
        <SheetListFetcherController>
            <SheetListFetcherView {...props} />
        </SheetListFetcherController>
    )
}