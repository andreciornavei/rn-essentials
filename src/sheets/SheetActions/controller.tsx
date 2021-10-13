import React from "react"
import { ReviewType } from "./../../types/ReviewType"


import { SheetActionsContext } from "./context"

interface Props {
    children: JSX.Element
}

export const SheetActionsController = (props: Props): JSX.Element => {

    const [review, setReview] = React.useState<ReviewType | undefined>(undefined)

    const store = {
        review,
        setReview
    }

    return (
        <SheetActionsContext.Provider value={store}>
            {props.children}
        </SheetActionsContext.Provider>
    )
}