import { StyleSheet } from 'react-native';
import { ThemeType } from '../..';

export const createStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        paragraph: {
            fontSize: 12,
            color: theme.color.defaultText,
            textAlign: "left"
        },
    });
    
}