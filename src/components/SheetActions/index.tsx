import React from "react"
import _ from "lodash"
import { Props } from "./types"
import { SheetActionsController } from "./controller"
import { SheetActionsView } from "./view"


export const SheetActions = (props: Props): JSX.Element => {
    return (
        <SheetActionsController>
            <SheetActionsView {...props} />
        </SheetActionsController>
    )
}