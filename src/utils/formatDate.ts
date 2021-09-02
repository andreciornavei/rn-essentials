import { parseISO, parse, lightFormat, format } from "date-fns"

export const formatDate = (date: string) => format(parseISO(date), "E - dd LLL/yyyy")

export const formatTime = (date: string) => format(parseISO(date), "HH:mm")

export const resolveAge = (date: string) => {
    try {
        const now = new Date()
        const firstYear = parseISO(date)
        return now.getFullYear() - firstYear.getFullYear()
    } catch (error) {
        return date
    }
}

export const normalizeDateDB = (date: string) => {
    try {
        const parsed = parse(String(date), 'ddMMyyyy', new Date())
        return lightFormat(parsed, 'yyyy-MM-dd')
    } catch (error) {
        return undefined;
    }
}

export const normalizeDateView = (date: string) => {
    try {
        const parsed = parse(String(date), 'yyyy-MM-dd', new Date())
        return lightFormat(parsed, 'dd/MM/yyyy')
    } catch (error) {
        return date === undefined ? undefined : String(date)
    }
}