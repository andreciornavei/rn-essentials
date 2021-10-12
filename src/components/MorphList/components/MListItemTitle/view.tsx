import React from "react"
import { View, Text } from "react-native"
import {createStyle} from "./styles";
import { MListItemTitleProps } from ".";
import { useTheme } from "../../../..";

export const MorphListItemTitleView = ({
    title = "Hello World",
    titleSize = 16,
    description,
    descriptionSize = 14,
    marginTop = 0,
    marginBottom = 0,
    ...props
}: MListItemTitleProps): JSX.Element => {

    const theme = useTheme()
    const styles = createStyle(theme)
    const titleColor = props.titleColor || theme.color.dark
    const descriptionColor = props.descriptionColor || theme.color.gray
    return (
        <View style={[styles.container, { marginTop: marginTop, marginBottom: marginBottom }]}>
            <View style={styles.topper}>
                <Text
                    style={[
                        styles.title,
                        { fontSize: titleSize, color: titleColor }
                    ]}
                >
                    {title}
                </Text>
            </View>
            {description && <Text style={[styles.description, { fontSize: descriptionSize, color: descriptionColor }]}>{description}</Text>}
        </View>
    );
}