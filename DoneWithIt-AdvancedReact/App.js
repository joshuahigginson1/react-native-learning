import React, { useState } from "react";
import { Error } from "react-native";
import AppLoading from "expo-app-loading";

import AppTabNavigation from "./app/navigation/AppTabNavigation";
import AuthNavigation from "./app/navigation/AuthNavigation";
import OfflineNotice from "./app/components/OfflineNotice";

import AuthContext from "./app/auth/AuthContext";
import authStorage from "./app/auth/authStorage";
import logger from "./app/utility/logger";

// Initialise logger.
logger.init();

export default function App() {
    const [user, setUser] = useState();
    const [appIsReady, setAppIsReady] = useState(false);

    const restoreUser = async () => {
        const user = await authStorage.getUser();
        if (user) setUser(user);
    };

    if (!appIsReady)
        return (
            <AppLoading
                startAsync={restoreUser}
                onFinish={() => setAppIsReady(true)}
                onError={(error) => logger.logException(error)}
            />
        );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <OfflineNotice />
            {user ? <AppTabNavigation /> : <AuthNavigation />}
        </AuthContext.Provider>
    );
}
