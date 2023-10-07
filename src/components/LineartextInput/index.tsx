import React, { ReactNode } from "react";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
    children: ReactNode;
}

export function LinearInput({children}: Props){
    return(
        <LinearGradient
        colors={theme.colors.linear}
        style={styles.textLinear}
        >
            {children}
        </LinearGradient>
    );
}