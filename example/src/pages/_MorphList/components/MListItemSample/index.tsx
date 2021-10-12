import React from "react"
import { MorphListItemBaseType } from "../../../../../../src/components/MorphList/types";
import { MListItemSampleView } from "./view"

export type MListItemSampleProps = {
    label: string
}

export class MListItemSample implements MorphListItemBaseType<any> {
    props: MListItemSampleProps
    constructor(props: MListItemSampleProps) {
        this.props = props
    }
    render(index: number) {
        return <MListItemSampleView {...this.props} />
    }
}