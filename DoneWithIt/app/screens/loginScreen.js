// Third Party Imports
import React from "react";
import {
    SafeAreaView,
    View,
    Image,
    StyleSheet,
    TouchableNativeFeedbackBase,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// Local Imports

import defaultStyles from "../config/defaultStyles";
import colours from "../config/colours";
import AppText from "../components/appText";
import AppTextInput from "../components/appTextInput";
import CustomButton from "../components/customButton";
import AppErrorMessage from "../components/appErrorMessage";

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
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({
                    handleSubmit,
                    handleChange,
                    errors,
                    touched,
                    setFieldTouched,
                }) => (
                    <React.Fragment>
                        <AppTextInput
                            placeholder="Email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            iconName="email"
                            textContentType="emailAddress"
                            onChangeText={handleChange("email")}
                            onBlur={() => setFieldTouched("email")}
                        />
                        <AppErrorMessage
                            visible={touched.email}
                            error={errors.email}
                        />
                        <AppTextInput
                            placeholder="Password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            iconName="lock"
                            textContentType="password"
                            secureTextEntry
                            onChangeText={handleChange("password")}
                            onBlur={() => setFieldTouched("password")}
                        />
                        <AppErrorMessage
                            visible={touched.password}
                            error={errors.password}
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
