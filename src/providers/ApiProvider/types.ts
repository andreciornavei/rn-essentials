import { AxiosInstance } from "axios";
import { ApiAction } from "./action";

export interface ApiProps {
    children?: JSX.Element
    apiBaseURL?: string
}

export type ApiStateProps = {
    token: string | undefined
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>
    http: AxiosInstance
    instanceOf: <T extends ApiAction>(action: typeof ApiAction) => T
}
