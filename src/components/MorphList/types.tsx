export interface MorphListItemBaseType<T> {
    props?: T
    render: (index: number) => JSX.Element
}

export interface MorphListLoadFnProps {
    recordStartIndex: number
    recordPerPage: number
    reset: boolean
}
