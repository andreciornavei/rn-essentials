import React from "react"

type Props = {
    children: JSX.Element
}

export const VoidProvider = (props: Props): JSX.Element => {
    return (
        <>
            {props.children}
        </>
    )
}