import { useNavigation } from "@react-navigation/native"
import React from "react"
import { useSheet } from "../../../src/providers/SheetProvider"
import { SheetConfirmation } from "../../../src/sheets/SheetConfirmation"

type AppDataControllerProps = {
    children: JSX.Element
}

type AppDataStateProps = {
    navigateToAccordion: () => void
}

const AppDataContext = React.createContext({} as AppDataStateProps)

export const AppDataProvider = (props: AppDataControllerProps): JSX.Element => {

    const { openSheet } = useSheet()
    const { navigate } = useNavigation<any>()
    
    const navigateToAccordion = () => {
        navigate("/component_accordion")
    }

    React.useEffect(() => {
        console.log("CALLING APP DATA PROVIDER")
        setTimeout(() => {
            openSheet(
                <SheetConfirmation
                    title="AppDataProvider"
                    message={`This is the innerProvider property calling any essential providers. Take care to not calling any provider as the same time this is launched, sometimes other providers needs more time to launch. This useEffect is using the setTimeout approach to launch useSheet dialog.`}
                    cancelLabel="Close"
                />
            )
        }, 3000)
    }, [])

    const state = {
        navigateToAccordion
    }

    return (
        <AppDataContext.Provider value={state}>
            {props.children}
        </AppDataContext.Provider>
    )
}

export function useAppData() {
    const appData = React.useContext(AppDataContext)
    if (!appData) throw new Error("useAppData must to be used inside AppDataProvider")
    return appData
}