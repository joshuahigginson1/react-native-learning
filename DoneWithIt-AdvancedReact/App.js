import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import AppTabNavigation from "./app/navigation/AppTabNavigation";
import AuthNavigation from "./app/navigation/AuthNavigation";
import OfflineNotice from "./app/components/OfflineNotice";

import AuthContext from "./app/auth/AuthContext";
import authStorage from "./app/auth/authStorage";

export default function App() {
    const [user, setUser] = useState();

    const restoreToken = async () => {
        const token = await authStorage.getToken();
        if (!token) return;
        setUser(jwtDecode(token));
    };

    useEffect(() => {
        restoreToken();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <OfflineNotice />
            {user ? <AppTabNavigation /> : <AuthNavigation />}
        </AuthContext.Provider>
    );
}
