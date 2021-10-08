import _ from "lodash"
import type { ReviewType } from "../types/ReviewType";

export const resolveErrors = (error: any): ReviewType => {
    if (_.isArray(_.get(error, "response.data.data"))) {
        // Treat indicative pattern response
        if ((_.get(error, "response.data.data") as []).some(item => {
            return (
                _.has(item, "field") &&
                _.has(item, "message") &&
                _.has(item, "validation")
            );
        })) {
            const review: any = {}
            for (const item of _.get(error, "response.data.data")) {
                review[_.get(item, "field")] = _.get(item, "message")
            }
            return {
                "message": _.get(error, "response.data.message"),
                "data": review
            }
        }
        // Treat strapi pattern response
        if ((_.get(error, "response.data.data.0.messages") as []).some(item => {
            return (
                _.has(item, "id") &&
                _.has(item, "message")
            );
        })) {
            const review: any = {}
            for (const item of _.get(error, "response.data.data.0.messages")) {
                review[_.get(item, "id")] = _.get(item, "message")
            }
            return {
                "message": _.get(error, "message"),
                "data": review
            }
        }
    }

    return {
        message: _.get(
            error,
            "response.data.message.0.messages.0.message",
            _.get(error, "message", "Ocorreu um erro")
        )
    }
}
