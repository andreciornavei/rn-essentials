import { Theme } from '@emotion/native';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const createStyle = (theme: Theme) => {
  return StyleSheet.create({
    //************************************//
    // BASE STYLES                        //
    //************************************//
    form_container: {
      position: "relative",
      flex: 1
    },
    form_input_container: {
      flexDirection: "row",
      backgroundColor: theme.color.light,
      borderRadius: 0,
      shadowRadius: 5,
      borderWidth: 1,
      borderColor: theme.color.muted,
      shadowOffset: { width: 1, height: 5 },
      marginTop: 0,
      width: '100%',
      maxWidth: "100%",
      minWidth: "100%",
      height: 45,
      alignItems: "center"
    },
    form_input: {
      height: 45,
      color: theme.color.defaultText,
      paddingHorizontal: 15
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