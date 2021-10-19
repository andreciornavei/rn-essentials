import _ from "lodash"
import type { ReviewType } from "../types/ReviewType";

export const resolveErrors = (error: any): ReviewType => {
    return {
        message: resolveErrorMessage(error),
        data: resolveReviewObject(error),
        composedMessage: resolveComposedMessage(error)
    }
}

const resolveComposedMessage = (error: any): string => {
    let composedMessage = resolveErrorMessage(error)
    const review = resolveReviewObject(error)
    if (_.isObject(review)) {
        for (const reviewItem of Object.values(review)) {
            composedMessage += `\n* ${reviewItem};`
        }
    }
    return composedMessage
}

const resolveErrorMessage = (error: any) => {
    return _.get(
        error,
        "response.data.message.0.messages.0.message",
        _.get(error, "response.data.message",
            _.get(error, "message",
                "Ocorreu um erro"
            )
        )
    )
}

const resolveReviewObject = (error: any) => {
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
            return review
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
            return review
        }
    }
    return undefined
}