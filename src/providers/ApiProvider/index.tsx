import React from "react"
import axios, { AxiosInstance } from "axios"
import { useStorage } from "../StorageProvider"
import { ApiProps, ApiStateProps } from "./types"
import { parseWithOptions } from "date-fns/fp"
import { ApiAction } from "./action"


const ApiContext = React.createContext<ApiStateProps>({} as ApiStateProps)

export const ApiProvider = (props: ApiProps): JSX.Element => {

    const storage = useStorage()
    const [token, setToken] = React.useState<string | undefined>(undefined)
    const http = axios.create({ baseURL: props.apiBaseURL });
    http.interceptors.request.use(async (config: any) => {
        const injectToken = token || (await storage.get<String>('token'));
        if (!config.headers.PreventAuthorization && injectToken) {
            config.headers.Authorization = `Bearer ${injectToken}`;
        }
        return config;
    });

   
    const instanceOf = <T extends ApiAction>(action: typeof ApiAction): T => {
        return new action(http) as T
    }

    const state = {
        token,
        setToken,
        http,
        instanceOf
    }

    return (
        <ApiContext.Provider value={state}>
            {props.children}
        </ApiContext.Provider>
    )

}

export function useApi() {
    const context = React.useContext(ApiContext);
    return context;
}