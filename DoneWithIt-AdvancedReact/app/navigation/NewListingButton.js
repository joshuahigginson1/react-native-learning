import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    size={40}
                    color={colors.white}
                    name="plus-circle"
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        bottom: 20,
        borderRadius: 40,
        height: 80,
        width: 80,
        borderColor: colors.white,
        borderWidth: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default NewListingButton;
