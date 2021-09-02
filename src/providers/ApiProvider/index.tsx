import React from "react"
import axios, { AxiosInstance } from "axios"
import { useStorage } from "../StorageProvider"

export interface ApiProps {
    children?: JSX.Element
    apiBaseURL?: string
}

type ApiStateProps = {
    token: string | undefined;
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
    http: AxiosInstance;
}

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

    const state = {
        token,
        setToken,
        http
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