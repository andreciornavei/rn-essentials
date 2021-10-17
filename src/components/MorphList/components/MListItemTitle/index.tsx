import React from "react"
import { MorphListItemTitleView } from "./view"
import { MorphListItemBaseType } from "../../types"

export type MListItemTitleProps = {
    title: string
    titleSize?: number
    titleColor?: string
    description?: string
    descriptionSize?: number
    descriptionColor?: string
    marginTop?: number
    marginBottom?: number
}

export class MListItemTitle implements MorphListItemBaseType<any> {
    
    props: MListItemTitleProps
    sticky= true

    constructor(props: MListItemTitleProps) {
        this.props = props
    }

    render(index: number) {
        return <MorphListItemTitleView {...this.props} />
    }
}