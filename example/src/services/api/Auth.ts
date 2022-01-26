import { ApiAction, resolvePreventAuth } from "@andreciornavei/rn-essentials";
export class AuthApi extends ApiAction {

    async login(): Promise<any> {
        // return this.http.post(`/route`)
        // this.http.post(`/route`, {}, resolvePreventAuth({}))
        console.log("EXECUTING LOGIN...")
        const payload = {
            foo: 'bar',
            avatar: { uri: 'file/to/avatar', fileName: "teste", fileType: "mp3" }
        }
        this.http.post(`/route`, payload, resolvePreventAuth({}))
        return {}
    }


}