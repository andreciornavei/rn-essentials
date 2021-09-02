import initials from "initials"

export const textInitials = (value: string, maxLength?: number) => {
    return maxLength ? truncate(initials(value) as string, maxLength) : initials(value)
}

export const truncate = (value: string, length: number) => {
    return value.slice(0, length)
}
