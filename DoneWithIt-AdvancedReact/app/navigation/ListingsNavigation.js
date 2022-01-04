// Third Party Imports
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local Imports
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const ListingsNavigator = () => (
    <Stack.Navigator
        initialRouteName="ListingsMain"
        screenOptions={{ presentation: "modal", headerShown: false }}
    >
        <Stack.Screen
            name="ListingsMain"
            component={ListingsScreen}
            options={{
                title: "Listings",
            }}
        />
        <Stack.Screen
            name="ListingDetails"
            component={ListingDetailsScreen}
            options={{ title: "Listing Details" }}
        />
    </Stack.Navigator>
);

function ListingsNavigation() {
    return <ListingsNavigator />;
}

export default ListingsNavigation;
