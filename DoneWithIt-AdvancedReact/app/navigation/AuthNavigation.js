// Third Party Imports
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local Imports

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import NavigationTheme from "./NavigationTheme";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
            name={routes.WELCOME}
            component={WelcomeScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
);

function AuthNavigation() {
    return (
        <NavigationContainer theme={NavigationTheme}>
            <AuthNavigator />
        </NavigationContainer>
    );
}

export default AuthNavigation;
