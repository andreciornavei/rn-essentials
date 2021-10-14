import { AxiosInstance } from "axios";

export class ApiAction {
    http: AxiosInstance
    constructor(http: AxiosInstance) {
        this.http = http
    }
}