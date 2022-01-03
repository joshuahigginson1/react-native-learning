// Third Party Imports
import { View, StyleSheet, FlatList, ScrollView } from "react-native";

// Local Imports
import colors from "../config/colors";
import ImageInput from "./ImageInput";

import React, { useRef } from "react";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
    const scrollViewRef = useRef();
    return (
        // By default, this ScrollView will have a flex of 1, which means that it will take up our entire screen.
        // We need to wrap in ANOTHER view to fix this and make it reusable.
        <View>
            <ScrollView
                style={styles.container}
                horizontal
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
            >
                {/* Render our existing images using map. Could also do with flatlist. */}
                {imageUris.map((uri) => (
                    <View style={styles.imageSpacing} key={uri}>
                        <ImageInput
                            imageUri={uri}
                            onChangeImage={() => onRemoveImage(uri)}
                        />
                    </View>
                ))}
                {/* Always want to have a new Image Input so a user can add a new one. */}
                <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: "row" },
    imageSpacing: { marginRight: 10 },
});

export default ImageInputList;
