export interface QueryPaginationType {
    pagination?: {
        start?: number
        limit?: number
        sort?: {
            field: string
            order: "ASC" | "DESC"
        }
    }
}