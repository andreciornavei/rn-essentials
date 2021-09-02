import React from "react"
import _ from "lodash"

interface Props { children: JSX.Element | JSX.Element[] }

export interface OptionProps {
    enableGesture?: boolean
    onClose?: () => void
}
interface SheetStateProps {
    open: boolean
    content: JSX.Element | undefined
    openSheet: (content: JSX.Element, options?: OptionProps) => void
    closeSheet: () => void
    onClose: Function | undefined
    enableGesture: boolean
}

const SheetContext = React.createContext({} as SheetStateProps)

export const SheetProvider = (props: Props): JSX.Element => {

    const [open, setOpen] = React.useState<boolean>(false)
    const [enableGesture, setEnableGesture] = React.useState<boolean>(false)
    const [content, setContent] = React.useState<JSX.Element | undefined>(undefined)
    const [onClose, setOnClose] = React.useState<Function | undefined>(undefined)

    const openSheet = (element: JSX.Element, options?: OptionProps) => {
        setContent(element)
        setEnableGesture(options?.enableGesture != undefined ? options.enableGesture : true)
        if (options?.onClose != undefined) setOnClose(() => options.onClose)
        setOpen(true)
    }

    const closeSheet = () => {
        if(onClose) onClose()
        setOpen(false)
        setContent(undefined)
        setOnClose(undefined)
    }

    const store = {
        open,
        content,
        onClose,
        openSheet,
        closeSheet,
        enableGesture
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