import React from 'react';
import { Text, View, Image, TextInput,ScrollView,TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import {useNavigation} from "@react-navigation/native";

import { styles } from "./styles";
import  Male  from "../../assets/MaleIcon.svg";
import  Female  from "../../assets/FemaleIcon.svg";

import { LinearBackside } from "../../components/LinearBackside";
import { LinearInput} from "../../components/LineartextInput";
import { ButtonNext } from "../../components/ButtonNext/index";


export function Calculator(){

    const [sexo, setSexo] = useState<string>('');
    const [peso, setPeso] = useState<number>();
    const [altura, setAltura] = useState<number>();
    const [idade, setIdade] = useState<number>();
    const [nivelAtividade, setNivelAtividade] = useState<number>();
    const [selec, setSselected] = useState<{male:boolean, female:boolean}>();
    const [resultadoFinal, setResultadoFinal] = useState<{
      tmb: number;
      necessidadesCaloricas: number;
      proteina: string;
      gordura: string;
      carboidrato: string;
    } | null>(null);
  
    const calcularTMB = (sexo: string, peso: number, altura: number, idade: number) => {
      if (sexo === 'homem') {
        return 66.5 + 13.75 * peso + 5 * altura - 6.75 * idade;
      } else {
        return 655.1 + 9.56 * peso + 1.85 * altura - 4.68 * idade;
      }
    };
  
    const calcularNecessidadesCaloricas = (tmb: number, nivelAtividade: number) => {
      return tmb * nivelAtividade;
    };
  
    const calcularDistribuicaoMacronutrientes = (necessidadesCaloricas: number) => {
      const caloriasProteina = necessidadesCaloricas * 0.25;
      const caloriasGordura = necessidadesCaloricas * 0.20;
      const caloriasCarboidrato = necessidadesCaloricas * 0.55;
  
      const gramasProteina = caloriasProteina / 4;
      const gramasGordura = caloriasGordura / 9;
      const gramasCarboidrato = caloriasCarboidrato / 4;
  
      return {
        proteina: gramasProteina,
        gordura: gramasGordura,
        carboidrato: gramasCarboidrato,
      };
    };

    const selecM = { male: true, female: false}
    const selecF = { male: false, female: true}
  
    const handleCalcular = () => {
      const tmb: number = calcularTMB(sexo, peso!, altura!, idade!);
      const necessidadesCaloricas: number = calcularNecessidadesCaloricas(tmb, nivelAtividade!);
      const distribuicaoMacronutrientes = calcularDistribuicaoMacronutrientes(necessidadesCaloricas + 450);
  
      const resultadoFinal = {
        tmb: tmb,
        necessidadesCaloricas: necessidadesCaloricas,
        proteina: distribuicaoMacronutrientes.proteina.toFixed(2),
        gordura: distribuicaoMacronutrientes.gordura.toFixed(2),
        carboidrato: distribuicaoMacronutrientes.carboidrato.toFixed(2),
      };
  
      setResultadoFinal(resultadoFinal);
    };    

    return (
        <View style={styles.container} >
            <ScrollView style={{ marginTop: "8%"}}>
                <View style={{marginBottom:20}}>
                    <Text style={styles.title}> Qual seu sexo? </Text>
                    <View style={styles.InputsView}>
                        <TouchableOpacity 
                            onPress={() => {setSexo("homem"); setSselected( selecM)}}
                            style={{opacity: selec?.male ? 1 : 0.4}}
                        >
                            <LinearInput>
                                <View style={styles.OrgButton}>
                                    <Female
                                        width={75}
                                        height={75}
                                    />
                                    <Text style={styles.TextButton}>
                                            Homem
                                    </Text>
                                </View>
                            </LinearInput>
                        </TouchableOpacity>
                        <View style={{width:20}}/>
                        <TouchableOpacity
                            onPress={() => {setSexo("mulher"); setSselected( selecF)}}
                            style={{opacity: selec?.female ? 1 : 0.4}}
                        >
                            <LinearInput>
                                <View style={styles.OrgButton}>
                                    <Male
                                        width={75}
                                        height={75}
                                    />
                                    <Text style={styles.TextButton}>
                                            Mulher
                                    </Text>
                                </View>
                            </LinearInput>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}> Qual a sua idade? </Text>
                    <View style={styles.InputsView}>
                        <LinearInput>
                            <TextInput 
                                style={styles.InputsNumber}
                                keyboardType='numeric'
                                onChangeText={(idade) => setIdade(Number(idade))}
                            />
                        </LinearInput>
                        <Text style={styles.TextNumber}>
                                Anos
                        </Text>
                    </View>
                </View>
             <View style={{marginTop: 20}}>
                    <Text style={styles.title}> Qual seu peso? </Text>
                    <View style={styles.InputsView}>
                        <LinearInput>
                            <TextInput 
                                style={styles.InputsNumber}
                                keyboardType='numeric'
                                onChangeText={(peso) => setPeso(Number(peso))}
                            />
                        </LinearInput>
                        <Text style={styles.TextNumber}>
                                Kg
                        </Text>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={styles.title}> Qual a sua altura? </Text>
                    <View style={styles.InputsView}>
                        <LinearInput>
                            <TextInput 
                                style={styles.InputsNumber}
                                keyboardType='numeric'
                                onChangeText={(altura) => setAltura(Number(altura))}
                            />
                        </LinearInput>
                        <Text style={styles.TextNumber}>
                                Cm
                        </Text>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={styles.title}> Qual seu fator de atividade? </Text>
                    <View style={styles.InputsView}>
                        <LinearInput>
                            <TextInput 
                                style={styles.InputsNumber}
                                keyboardType='numeric'
                                onChangeText={(nivelAtividade) => setNivelAtividade(Number(nivelAtividade))}
                            />
                        </LinearInput>
                    </View>
                    <Text style={{ color:"white", marginTop: 10, marginBottom: 20}}>
                        Sedentário – pouco ou nenhum exercício (TMB x 1.2){`\n`}
                        Pouco ativo – exercício/esporte leve 1-3 dias/semana (TMB x 1.375){`\n`}
                        Moderadamente ativo – exercício/esporte moderado 3-5 dias/semana (TMB x 1.55){`\n`}
                        Muito ativo – exercício/esporte pesado 6-7 dias/semana (TMB x 1.725){`\n`}
                        Extremamente ativo – exercício/esporte muito pesado e trabalho físico {`\n`} intenso diariamente ou treino de 2x ao dia (TMB x 1.9)                       
                    </Text>
                </View>
                
                <Text style={styles.title}><LinearBackside/> Resultado: </Text>
                <Text style={styles.subtitle}>TMB: {resultadoFinal?.tmb}</Text>
                <Text style={styles.subtitle}>Necessidades Calóricas: {resultadoFinal?.necessidadesCaloricas}</Text>
                <Text style={styles.subtitle}>Proteína: {resultadoFinal?.proteina}</Text>
                <Text style={styles.subtitle}>Gordura: {resultadoFinal?.gordura}</Text>
                <Text style={styles.subtitle}>Carboidrato: {resultadoFinal?.carboidrato}<LinearBackside/></Text>
            </ScrollView>
            <View style={styles.content}>
                <ButtonNext
                text={"Cálcular"}  
                onPress={handleCalcular}              
                />
            </View>

        </View>
    );
}