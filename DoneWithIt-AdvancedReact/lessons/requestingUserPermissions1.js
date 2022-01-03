import React, { useEffect } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";

import * as ImagePicker from "expo-image-picker";

export default function App() {
    const requestPermissions = async () => {
        // Get permissions from the user to view camera roll.
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted)
            alert("You need to enable permissions to access the camera roll!");
    };

    // Called every time a component is rendered.
    useEffect(() => {
        requestPermissions();
        // An empty set of braces means that the useEffect function will only be ran when component is first mounted.
    }, []);
    return <Screen></Screen>;
}
