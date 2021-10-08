import { Theme } from '@emotion/native';
import { StyleSheet } from 'react-native';

export const createStyle = (theme: Theme) => {
  return StyleSheet.create({
    //************************************//
    // BASE STYLES                        //
    //************************************//
    form_container: {
      position: "relative",
      flex: 1,
    },
    form_input: {
      backgroundColor: theme.color.light,
      borderRadius: 0,
      shadowRadius: 5,
      borderWidth: 1,
      borderColor: theme.color.muted,
      shadowOffset: { width: 1, height: 5 },
      paddingHorizontal: 15,
      color: theme.color.defaultText,
      marginTop: 0,
      width: '100%',
      height: 45,
    },

    //************************************//
    // FORM LEGEND - BASE RULES           //
    //************************************//
    form_legend: {
      paddingHorizontal: 5,
      paddingVertical: 1,
    },
    form_legend_value: {
      fontSize: 12,
      color: theme.color.light,
      fontWeight: "500"
    },
  })
}