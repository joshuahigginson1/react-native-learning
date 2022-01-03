import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";

import Screen from "./app/components/Screen";

export default function App() {
    const [userImageURI, setUserImageURI] = useState();

    const requestPermissions = async () => {
        // Get permissions from the user to view camera roll.
        const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted)
            alert("You need to enable permissions to access the camera roll!");
    };

    const selectImage = async () => {
        // Open user's camera roll.
        try {
            // Open Camera Roll.
            const result = await ImagePicker.launchImageLibraryAsync();

            // Set image URI state equal to the uri of picked image.
            if (!result.cancelled) setUserImageURI(result.uri);
        } catch (error) {
            console.log("Error when reading image:", error);
        }
    };

    // Called every time a component is rendered.
    useEffect(() => {
        requestPermissions();
        // An empty set of braces means that the useEffect function will only be ran when component is first mounted.
    }, []);
    return (
        <Screen>
            <Button onPress={selectImage} title="Select an Image." />
            <Image
                source={{ uri: userImageURI }}
                style={{ width: 400, height: 400 }}
            />
        </Screen>
    );
}
