import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    conteiner:{
        width: '100%',
        height: 63,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 37,
        justifyContent:'flex-end'
    },
    text: {
        color:'white',
        fontFamily: theme.fonts.text400,
        fontSize: 24,
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        textAlign: 'center'
    },
    ball:{
        width:71,
        height:63,
        backgroundColor: theme.colors.backopacity,
        borderRadius: 37,
        alignItems: 'center',
        justifyContent:'center'
    }
});