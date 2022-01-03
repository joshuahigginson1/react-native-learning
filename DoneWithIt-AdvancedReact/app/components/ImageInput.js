// Third Party Imports
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

// Local Imports
import colors from "../config/colors";

function ImageInput({ size = 100, imageUri, onChangeImage }) {
    const requestPermissions = async () => {
        // Get permissions from the user to view camera roll.
        const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted)
            alert("You need to enable permissions to access the camera roll!");
    };

    const handlePress = () => {
        // If we have no image selected, prompt to select image.
        if (!imageUri) selectImage();
        else
            Alert.alert(
                "Delete Image",
                "Would you like to delete this image?",
                [
                    { text: "Yes", onPress: () => onChangeImage(null) },
                    { text: "No" },
                ]
            );
    };
    const selectImage = async () => {
        // Open user's camera roll.
        try {
            // Open Camera Roll.
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });

            // Notify the consumer of the component that our image has changed and pass it the uri.
            if (!result.cancelled) onChangeImage(result.uri);
            console.log(result.uri);
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
        // This is what should be returned when an image IS loaded.
        <TouchableOpacity onPress={handlePress}>
            <View style={styles(size).container}>
                {imageUri && (
                    <Image
                        source={{ uri: imageUri }}
                        style={styles(size).renderedImage}
                    />
                )}

                {!imageUri && (
                    <MaterialCommunityIcons
                        name="camera"
                        color={colors.dark}
                        size={Math.ceil(size / 3)}
                    />
                )}
            </View>
        </TouchableOpacity>

        // This is what should be returned when an image isn't loaded.
        // <TouchableOpacity>
        //     <View style={styles(size).container}>
        //     </View>
        // </TouchableOpacity>
    );
}

const styles = (size) =>
    StyleSheet.create({
        container: {
            backgroundColor: colors.light,
            height: size,
            width: size,
            borderRadius: Math.ceil(size / 4),
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
        },
        renderedImage: {
            height: size,
            width: size,
        },
    });

export default ImageInput;
