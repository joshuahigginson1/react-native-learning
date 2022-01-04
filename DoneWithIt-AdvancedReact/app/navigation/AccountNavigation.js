// Third Party Imports
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local Imports
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator initialRouteName="AccountMain">
        <Stack.Screen
            name={routes.ACCOUNT_MAIN}
            component={AccountScreen}
            options={{
                headerShown: false,
                title: "Account",
            }}
        />
        <Stack.Screen
            name={routes.MESSAGES}
            component={MessagesScreen}
            options={{ title: "Messages" }}
        />
    </Stack.Navigator>
);

function AccountNavigation() {
    return <AccountNavigator />;
}

export default AccountNavigation;
