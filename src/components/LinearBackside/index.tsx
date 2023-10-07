import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function LinearBackside(){
    return(
        <LinearGradient
        colors={theme.colors.linear}
        style={styles.textLinear}
        start={{x:1.0, y: 0.0}}
        end={{x:0, y:0}}
        >
        </LinearGradient>
    );
}