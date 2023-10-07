import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center",
        justifyContent: "center"
    },
    content:{
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        zIndex: 1,
        bottom: 80,
        width:'85%'
    },
    title:{
        color:'white',
        fontFamily: theme.fonts.title600,
        fontSize: 28,
        textAlign: "center",
        marginBottom: 20,
    },
    subtitle:{
        color:'white',
        fontFamily: theme.fonts.text400,
        fontSize: 22,
        textAlign: "center",
        marginBottom:50
    },
    image:{
        width: '100%',
        height: 533
    }
})