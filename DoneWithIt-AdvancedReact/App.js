import React from "react";

import AppTabNavigation from "./app/navigation/AppTabNavigation";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
    return (
        <>
            <OfflineNotice />
            <AppTabNavigation />
        </>
    );
}
