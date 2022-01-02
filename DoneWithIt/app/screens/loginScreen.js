// Third Party Imports
import React, { useState } from "react";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";
import { Formik } from "formik";

// Local Imports

import defaultStyles from "../config/defaultStyles";
import colours from "../config/colours";
import AppTextInput from "../components/appTextInput";
import CustomButton from "../components/customButton";

function LoginScreen() {
    [email, setEmail] = useState();
    [password, setPassword] = useState();
    return (
        <SafeAreaView style={styles.window}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <AppTextInput
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                iconName="email"
                textContentType="emailAddress"
                onChangeText={(text) => setEmail(text)}
            />
            <AppTextInput
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                iconName="lock"
                textContentType="password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <CustomButton
                title="LOGIN"
                onPress={() => console.log(email, password)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    window: {
        ...defaultStyles.window,
        marginHorizontal: "5%",
        alignItems: "center",
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 50,
    },
});

export default LoginScreen;
