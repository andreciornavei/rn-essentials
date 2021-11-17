import { Ref } from "react"
import { ListFectcherProps, ListFectherFunctions } from "../.."
import { InputTextProps } from "../../components/InputText/types"

export type SheetListFetcherControllerProps = { children: JSX.Element }
export type HeaderProps = {
    title: string
    closeable: boolean
}
export type SheetListFetcherProps<T> = {
    disableSheetHeader?: boolean
    disableSheetSearch?: boolean
    disableSheetFooter?: boolean
    footerComponent?: JSX.Element
    headerProps?: HeaderProps
    searchProps?: InputTextProps
    listRef?: Ref<ListFectherFunctions<T>>
    listProps: ListFectcherProps<T>
    onSearch?: (value: string) => void
}
export type SheetListFetcherStateProps = {
    searchControl: string;
    setSearchControl: React.Dispatch<React.SetStateAction<string>>;
}