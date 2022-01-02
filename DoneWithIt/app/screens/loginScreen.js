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
    return (
        <SafeAreaView style={styles.window}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleSubmit, handleChange }) => (
                    <React.Fragment>
                        <AppTextInput
                            placeholder="Email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            iconName="email"
                            textContentType="emailAddress"
                            onChangeText={handleChange("email")}
                        />
                        <AppTextInput
                            placeholder="Password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            iconName="lock"
                            textContentType="password"
                            secureTextEntry
                            onChangeText={handleChange("password")}
                        />
                        <CustomButton title="LOGIN" onPress={handleSubmit} />
                    </React.Fragment>
                )}
            </Formik>
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
