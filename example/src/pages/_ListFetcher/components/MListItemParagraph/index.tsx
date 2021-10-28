import { Paragraph } from "@andreciornavei/rn-essentials"
import React from "react"
import { View } from "react-native"
import { MorphListItemBaseType } from "../../../../../../src/components/MorphList/types"

export type MListItemSampleProps = {
    text: string[]
}

export class MListItemParagraph implements MorphListItemBaseType<any> {
    props: MListItemSampleProps
    sticky = true
    constructor(props: MListItemSampleProps) {
        this.props = props
    }
    render(index: number) {
        return (
            <View style={{ paddingHorizontal: 25 }}>
                <Paragraph value={this.props.text} />
            </View>
        )
    }
}