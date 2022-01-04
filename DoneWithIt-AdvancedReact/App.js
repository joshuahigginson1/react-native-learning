import React, { useEffect, useState } from "react";
import { Text, Button } from "react-native";

import AuthNavigation from "./app/navigation/AuthNavigation";
import AppTabNavigation from "./app/navigation/AppTabNavigation";

export default function App() {
    return <AppTabNavigation />;
}
