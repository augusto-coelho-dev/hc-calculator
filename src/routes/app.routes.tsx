import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Calculator } from "../screens/Calculator";
import { Welcome } from "../screens/Welcome";

const {Navigator, Screen} = createNativeStackNavigator();

export function UserRoutes(){
    return(
        <Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Screen
                name= "Welcome"
                component={Welcome}

            />
            <Screen
                name= "Calculator"
                component={Calculator}
            />
        </Navigator>
    );
}