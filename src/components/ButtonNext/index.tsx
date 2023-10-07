import React from "react";
import { Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import Arrow from "../../assets/ArrowRigth.svg";

type Props = TouchableOpacityProps & {
    text: string;
}

export function ButtonNext({text, ...rest}:Props){
    return(
        <TouchableOpacity style={styles.conteiner} {...rest}>
            <Text style={styles.text}>
                {text}
            </Text>
            <View style={styles.ball}>
                <Arrow width={30} height={30} />
            </View>
        </TouchableOpacity>
    );
}