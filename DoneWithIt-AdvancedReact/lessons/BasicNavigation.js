import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";

import Screen from "./app/components/Screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Tweets = () => (
    <Screen>
        <Text>Tweets</Text>
    </Screen>
);

const TweetDetails = () => (
    <Screen>
        <Text>Tweet Details</Text>
    </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator initialRouteName="Tweets">
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}
