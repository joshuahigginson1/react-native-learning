// Third Party Imports
import React from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// Local Imports

import defaultStyles from "../config/defaultStyles";
import { AppFormField, AppSubmitButton, AppFormik } from "../components/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
});

function LoginScreen() {
    return (
        <SafeAreaView style={styles.window}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <AppFormik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    iconName="email"
                    textContentType="emailAddress"
                    fieldName="email"
                />
                <AppFormField
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    iconName="lock"
                    textContentType="password"
                    secureTextEntry
                    fieldName="password"
                />
                <AppSubmitButton title="LOGIN" />
            </AppFormik>
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
