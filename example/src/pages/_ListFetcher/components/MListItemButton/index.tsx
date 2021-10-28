import { Button } from "@andreciornavei/rn-essentials"
import React from "react"
import { View } from "react-native"
import { MorphListItemBaseType } from "../../../../../../src/components/MorphList/types"

export type MListItemButtonProps = {
    label: string
    action: () => void
}

export class MListItemButton implements MorphListItemBaseType<any> {
    props: MListItemButtonProps
    constructor(props: MListItemButtonProps) {
        this.props = props
    }
    render(index: number) {
        return (
            <View style={{ paddingHorizontal: 25 }}>
                <Button
                    theme="primary"
                    size="medium"
                    shape="pill"
                    center={true}
                    label={this.props.label}
                    leftIcon={{
                        pack: "Feather",
                        name: "arrow-left"
                    }}
                    onPress={this.props.action}
                />
            </View>
        )
    }
}