import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppText from "./app/components/Text";

export default function App() {
    const netInfo = useNetInfo();

    const demoAsyncStorage = async () => {
        try {
            await AsyncStorage.setItem(
                "person",
                JSON.stringify({ id: 1, name: "Josh" })
            );
            const value = await AsyncStorage.getItem("person");
            console.log(JSON.parse(value));
        } catch (error) {
            console.log(error);
        }
    };

    demoAsyncStorage();

    return netInfo.isInternetReachable ? (
        <AppText>Internet Reachable</AppText>
    ) : (
        <AppText>Internet Offline</AppText>
    );
}
