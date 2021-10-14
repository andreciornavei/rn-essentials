import _ from "lodash"
import { QueryFilterType } from "../types/QueryFilterType"

export function resolveFilterHttp(query?: QueryFilterType) {
    const filters = []
    if (query?.filters) {
        if (_.isArray(query.filters)) {
            for (const fields of query.filters) {
                for (const field in fields) {
                    filters.push(`${field}=${fields[field]}`)
                }
            }
        } else if (_.isObject(query.filters)) {
            for (const field in query.filters) {
                filters.push(`${field}=${_.get(query, `filters`)[`${field}`]}`)
            }
        }
    }
    if (query?.pagination?.start) filters.push(`_start=${query.pagination.start}`)
    if (query?.pagination?.limit) filters.push(`_limit=${query.pagination.limit}`)
    if (query?.pagination?.sort) filters.push(`_sort=${query.pagination.sort.field}:${query.pagination.sort.order}`)
    console.log(filters.join("&"))
    return filters.join("&")
}