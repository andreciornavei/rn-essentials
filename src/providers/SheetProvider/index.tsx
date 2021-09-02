import React from "react"
import _ from "lodash"

interface Props { children: JSX.Element | JSX.Element[] }

interface SheetStore {
    open: boolean
    content: JSX.Element | undefined
    openSheet: (content: JSX.Element) => void
    closeSheet: () => void
}

const SheetContext = React.createContext({} as SheetStore)

export const SheetProvider = (props: Props): JSX.Element => {

    const [open, setOpen] = React.useState<boolean>(false)
    const [content, setContent] = React.useState<JSX.Element | undefined>(undefined)

    const openSheet = (element: JSX.Element) => {
        setContent(element)
        setOpen(true)
    }

    const closeSheet = () => {
        setOpen(false)
        setContent(undefined)
    }

    const store = {
        open,
        content,
        openSheet,
        closeSheet
    }

    return (
        <SheetContext.Provider value={store}>
            {props.children}
        </SheetContext.Provider>
    )
}

export function useSheet() {
    const context = React.useContext(SheetContext);
    return context;
}