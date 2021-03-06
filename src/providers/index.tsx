import { Theme } from "@emotion/react"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { defaultTheme, ThemeProvider } from "./ThemeProvider"
import { StorageProvider } from "./StorageProvider"
import { DatabaseProps, DatabaseProvider } from "./DatabaseProvider"
import { RefreshProvider } from "./RefreshProvider"
import { NotificationProvider } from "./NotificationProvider"
import { ApiProvider } from "./ApiProvider"
import { SocketProps, SocketProvider } from "./SocketProvider"
import { SheetProvider } from "./SheetProvider"
import { RouteProps, RouteProvider } from "./RouteProvider"
import { ApiProps } from "./ApiProvider/types"

interface Props extends DatabaseProps, ApiProps, SocketProps, RouteProps {
    theme?: Partial<Theme> | ((outerTheme: Theme) => Theme)
    innerProvider?: React.FC<{ children: JSX.Element }> | undefined
}

export const EssentialProviders = (props: Props): JSX.Element => {
    return (
        <ThemeProvider theme={props.theme || defaultTheme}>
            <StorageProvider>
                <DatabaseProvider dbName={props.dbName} dbEntities={props.dbEntities}>
                    <RefreshProvider>
                        <NotificationProvider>
                            <ApiProvider apiBaseURL={props.apiBaseURL}>
                                <SocketProvider apiBaseURL={props.apiBaseURL}>
                                    <SafeAreaProvider>
                                        <SheetProvider>
                                            <RouteProvider
                                                innerProvider={props.innerProvider}
                                                initialRouteName={props.initialRouteName}
                                                routes={props.routes} />
                                        </SheetProvider>
                                    </SafeAreaProvider>
                                </SocketProvider>
                            </ApiProvider>
                        </NotificationProvider>
                    </RefreshProvider>
                </DatabaseProvider>
            </StorageProvider>
        </ThemeProvider>
    )
}