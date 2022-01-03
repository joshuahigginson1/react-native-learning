import React, { useEffect, useState } from "react";
import { Text, Button } from "react-native";

import Screen from "./app/components/Screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Link = () => {
    const navigation = useNavigation();
    return (
        <Button
            title="Click"
            onPress={() =>
                navigation.navigate("TweetDetails", { id: "Banana Tweet" })
            }
        />
    );
};

const Tweets = () => (
    <Screen>
        <Text>Tweets</Text>
        <Link />
    </Screen>
);

const TweetDetails = ({ route }) => (
    <Screen>
        <Text>Tweet Details: {route.params.id}</Text>
    </Screen>
);

const Account = () => (
    <Screen>
        <Text>Account</Text>
    </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator
        initialRouteName="Tweets"
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen
            name="TweetDetails"
            component={TweetDetails}
            options={({ route }) => ({
                title: route.params.id,
                headerShown: true,
                headerTintColor: "white",
                headerStyle: { backgroundColor: "dodgerblue" },
            })}
        />
    </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: "tomato",
            activeTintColor: "white",
            inactiveBackgroundColor: "#eee",
            inactiveTintColor: "black",
        }}
    >
        <Tab.Screen
            name="Feed"
            component={Tweets}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="home"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
        <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}
