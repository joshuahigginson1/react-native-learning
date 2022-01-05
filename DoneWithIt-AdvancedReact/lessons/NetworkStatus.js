import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./app/components/Text";

import AuthNavigation from "./app/navigation/AuthNavigation";
import AppTabNavigation from "./app/navigation/AppTabNavigation";

export default function App() {
    const netInfo = useNetInfo();

    return netInfo.isInternetReachable ? (
        <AppText>Internet Reachable</AppText>
    ) : (
        <AppText>Internet Offline</AppText>
    );
}
