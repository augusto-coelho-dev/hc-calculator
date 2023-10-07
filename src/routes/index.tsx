import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { UserRoutes } from "./app.routes";

export function Routes() {
    return(
        <NavigationContainer>
            <UserRoutes/>
        </NavigationContainer>
    );
}