import React from "react"
import { CheckboxController } from "./controller"
import { CheckboxProps } from "./types"
import { CheckboxView } from "./view"
export const Checkbox = (props: CheckboxProps): JSX.Element => {
    return (
        <CheckboxController {...props}>
            <CheckboxView {...props} />
        </CheckboxController>
    )
}