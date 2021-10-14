import { ApiAction, resolvePreventAuth } from "@andreciornavei/rn-essentials";
export class AuthApi extends ApiAction {
    
    async login(): Promise<any>{
        // return this.http.post(`/route`)
        // this.http.post(`/route`, {}, resolvePreventAuth({}))
        console.log("EXECUTING LOGIN...")
        return {}
    }
    

}