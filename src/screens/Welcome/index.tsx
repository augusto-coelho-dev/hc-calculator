import React from 'react';
import { Text, View, Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";

import { styles } from "./styles";
import  BackImg  from "../../assets/LoadAppIcon.png";
import { ButtonNext } from "../../components/ButtonNext/index";

export function Welcome(){

    const navegador = useNavigation();

    function handleCalculator() {
        navegador.navigate('Calculator');
    }

    return (
        <View style={styles.container} >
            <Image
                source={BackImg}
                style={styles.image}
                resizeMode='stretch'
            />
            <View style={styles.content}>           

                <Text style={styles.title}> Bem-vindo(a)! </Text>
                <Text style={styles.subtitle}> 
                    Essa calculadora hipercalórica, {'\n'}
                    irá te auxiliar a dividir {'\n'}
                    seus macronutrientes para {'\n'}
                    uma dieta de ganho {'\n'}
                    de massa corporal... 
                </Text>

                <ButtonNext
                    text={"Iniciar"}
                    onPress={handleCalculator}
                />
            </View>
            <View style={{flex:1}}/>
        </View>
    );
}