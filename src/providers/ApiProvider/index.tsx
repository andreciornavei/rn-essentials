import React from "react"
import axios from "axios"
import { useStorage } from "../StorageProvider"
import { ApiProps, ApiStateProps } from "./types"
import { ApiAction } from "./action"
import _ from "lodash"


const ApiContext = React.createContext<ApiStateProps>({} as ApiStateProps)

export const ApiProvider = (props: ApiProps): JSX.Element => {

    const storage = useStorage()
    const [token, setToken] = React.useState<string | undefined>(undefined)
    
    
    const isMultipart = (data: any) => {
        return Object.values(data).some(entry => typeOfImage(entry))
    }

    const typeOfImage = (entry: any) => {
        return _.get(entry, "uri") != undefined
    }

    function resolveMultipart(fields: object) {
        const form = new FormData()
        // append json data structure
        const payload = {}
        for (const field in fields) {
            if (typeOfImage(_.get(fields, field))) {
                form.append(`files.${field}`, {
                    uri: _.get(fields, `${field}.uri`),
                    name: _.get(fields, `${field}.fileName`),
                    type: _.get(fields, `${field}.type`),
                });
            } else {
                _.set(payload, field, _.get(fields, field))
            }
        }
        form.append("data", JSON.stringify(payload))
        return form
    }
    
    const http = axios.create({ baseURL: props.apiBaseURL });
    http.interceptors.request.use(async (config: any) => {
        // resolve multipart/form-data if neceessary
        if (config.data) {
            const multipart = isMultipart(config.data)
            if (multipart) config.data = resolveMultipart(config.data)
            if (multipart) config.headers['Content-Type'] = "multipart/form-data"
        }
        // resolve authorization token injection
        const jwt = token || (await storage.get<String>('token'));
        if (jwt && !config.headers.XPreventAuth) config.headers.Authorization = `Bearer ${jwt}`;
        return config;
    });


    const instanceOf = <T extends ApiAction>(action: typeof ApiAction): T => {
        return new action(http) as T
    }

    const state = {
        token,
        http,
        setToken,
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

export function resolvePreventAuth(config: object) {
    _.set(config, "headers.XPreventAuth", true)
    return config
  }
  