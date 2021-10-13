import { ReviewType } from "../../types/ReviewType";

export type SheetActionType = {
    index?: number
    label: string
    action: () => Promise<any>
}

export interface Props {
    title: string
    closeLabel?: string
    actions?: SheetActionType[]
}

export interface SheetActionsStore {
    review: ReviewType | undefined
    setReview: React.Dispatch<React.SetStateAction<ReviewType | undefined>>
}