import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
    Form,
    FormField,
    SubmitButton,
    ErrorMessage,
} from "../components/forms";
import useAuth from "../auth/useAuth";
import auth from "../api/auth";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
    const [registerFailed, setRegisterFailed] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);

    const authContext = useAuth();

    const handleSubmit = async (userInfo) => {
        const registerResponse = await auth.register(userInfo);
        if (!registerResponse.ok) return setRegisterFailed(true);
        setRegisterFailed(false);
        const loginResponse = await auth.login(
            userInfo.email,
            userInfo.password
        );
        if (!loginResponse.ok) return setLoginFailed(true);
        setLoginFailed(false);
        authContext.login(loginResponse.data);
    };

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(credentials) => handleSubmit(credentials)}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
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
                        error="A user with this email already exists!"
                        visible={registerFailed}
                    />
                    <ErrorMessage
                        error="Apologies, we are currently having trouble logging you in."
                        visible={loginFailed}
                    />
                </View>
                <SubmitButton title="Register" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    error: { alignSelf: "center", paddingVertical: 5 },
});

export default RegisterScreen;
