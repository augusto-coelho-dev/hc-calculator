import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: theme.colors.background
    },
    content:{
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 80,
        width:'85%',
        marginTop: 20
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
    },
    cadinput:{
        height: 50,
        width: "100%",
        paddingLeft:10,
        color:"white",
        fontSize: 18
    },
    InputsView:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%"
    },
    InputsNumber:{
        backgroundColor: theme.colors.background,
        margin: 4,
        width: 76,
        height: 46,
        borderRadius: 8,
        color:"white",
        paddingLeft: 10,
        fontSize: 20
    },
    TextNumber:{
        fontFamily: theme.fonts.text400,
        color: "white",
        borderColor: "white",
        borderWidth: 4,
        width: 76,
        height: 54,
        marginLeft: 15,
        textAlign: 'center',
        borderRadius:10,
        fontSize: 22,
        paddingTop: 15
    },
    IconButton:{
        height:75,
        width:75
    },
    TextButton:{
        color:"white",
        fontFamily: theme.fonts.text400,
        fontSize:20,
        width:"100%",
        textAlign:"center"
    },
    OrgButton:{
        backgroundColor:theme.colors.background,
        justifyContent: "center",
        alignItems: "center",
        height:125,
        width:100,
        margin: 3,
        borderRadius: 10

    }
})