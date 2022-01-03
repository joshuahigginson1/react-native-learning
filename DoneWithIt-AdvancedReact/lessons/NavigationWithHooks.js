import React, { useEffect, useState } from "react";
import { Text, Button } from "react-native";

import Screen from "./app/components/Screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Link = () => {
    const navigation = useNavigation();
    return (
        <Button
            title="Click"
            onPress={() => navigation.navigate("TweetDetails")}
        />
    );
};

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Link />
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
