import React, { ReactNode } from "react";
import { styles } from "./styles";

import { View } from "react-native";

type Props = {
    children: ReactNode;
}

export function BackGround({children}: Props){
    return(
        <View
        style={styles.textLinear}>
            {children}
        </View>
    );
}