import React from "react"

import _ from "lodash"

interface Props {
    children: JSX.Element
}

interface RefreshStore {
    consumeRefreshScreen: (key: string) => any
    setRefreshScreen: (screens: Object) => void
}

export const RefreshContext = React.createContext({} as RefreshStore)

export const RefreshProvider = (props: Props) => {

    const REFRESH_SCREENS = {}

    const consumeRefreshScreen = (key: string) => {
        const response = _.get(REFRESH_SCREENS, key)
        if (response) _.set(REFRESH_SCREENS, key, undefined)
        return response
    }

    const setRefreshScreen = (screens: Object) => {
        for (const screenKey in screens) {
            _.set(REFRESH_SCREENS, screenKey, _.get(screens, screenKey));
        }
    }

    const store = {
        consumeRefreshScreen,
        setRefreshScreen
    }

    return (
        <RefreshContext.Provider value={store}>
            {props.children}
        </RefreshContext.Provider>
    )
}

export function useRefresh() {
    const context = React.useContext(RefreshContext);
    return context;
}