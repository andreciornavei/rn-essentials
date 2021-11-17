import React from "react"
import { SheetListFetcherContext } from "./context"
import { SheetListFetcherControllerProps } from "./types"
export const SheetListFetcherController = <T extends unknown>(props: SheetListFetcherControllerProps): JSX.Element => {

    const [searchControl, setSearchControl] = React.useState<string>("")

    const state = {
        searchControl,
        setSearchControl
    }
    
    return (
        <SheetListFetcherContext.Provider value={state}>
            {props.children}
        </SheetListFetcherContext.Provider>
    )
}