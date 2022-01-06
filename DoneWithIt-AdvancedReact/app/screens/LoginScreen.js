import React, { useState, useContext } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import auth from "../api/auth";
import Screen from "../components/Screen";
import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from "../components/forms";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
    const [loginFailed, setLoginFailed] = useState(false);

    const authContext = useAuth();

    const handleSubmit = async ({ email, password }) => {
        const result = await auth.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        authContext.login(result.data);
    };

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <Form
                initialValues={{ email: "", password: "" }}
                onSubmit={(credentials) => handleSubmit(credentials)}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <View style={styles.error}>
                    <ErrorMessage
                        error="Invalid Email or Password"
                        visible={loginFailed}
                    />
                </View>
                <SubmitButton title="Login" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    error: { alignSelf: "center", paddingVertical: 5 },
});

export default LoginScreen;
