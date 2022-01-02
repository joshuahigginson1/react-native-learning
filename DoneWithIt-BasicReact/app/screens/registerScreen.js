// Third Party Imports
import React from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";
import * as Yup from "yup";

// Local Imports

import defaultStyles from "../config/defaultStyles";
import { AppFormField, AppSubmitButton, AppFormik } from "../components/forms";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().min(2).max(40).label("First Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
    confirmPassword: Yup.string()
        .required()
        .min(8)
        .oneOf([Yup.ref("password")], "Passwords do not match!")
        .label("Password Confirm"),
});

function RegisterScreen() {
    return (
        <SafeAreaView style={styles.window}>
            <AppFormik
                initialValues={{
                    firstName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    placeholder="First Name"
                    autoCapitalize="words"
                    autoCorrect={false}
                    keyboardType="default"
                    iconName="account"
                    textContentType="name"
                    fieldName="firstName"
                />
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
                    iconName="lock-open"
                    textContentType="password"
                    secureTextEntry
                    fieldName="password"
                />
                <AppFormField
                    placeholder="Confirm Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    iconName="lock"
                    textContentType="password"
                    secureTextEntry
                    fieldName="confirmPassword"
                />
                <AppSubmitButton title="REGISTER" />
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

export default RegisterScreen;
