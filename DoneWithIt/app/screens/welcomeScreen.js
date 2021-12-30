// Third Party Imports

import {
    View,
    Image,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
    Button,
    Text,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";

// Local Imports
import colours from "../config/colours.js";

function WelcomeScreen() {
    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            style={handleStyles().backgroundImage}
        >
            <View style={handleStyles().logoContainer}>
                <Image
                    source={require("../assets/logo-red.png")}
                    style={handleStyles().logo}
                    // resizeMode="contain"
                />
                <Text>Sell what you don't need!</Text>
            </View>

            <SafeAreaView style={handleStyles().buttonsContainer}>
                <Button
                    color={handleStyles().buttonLogin.color}
                    title="Login"
                />
                <Button
                    color={handleStyles().buttonRegister.color}
                    title="Register"
                />
            </SafeAreaView>
        </ImageBackground>
    );
}

const handleStyles = () =>
    StyleSheet.create({
        backgroundImage: {
            width: useDimensions().window.width,
            height: useDimensions().window.height,
            resizeMode: "cover",
            flex: 1,
        },
        logoContainer: {
            borderWidth: 5,
            borderColor: "red",
            flex: 3,
            alignItems: "center",
            top: "10%",
        },
        logo: {
            height: "30%",
            width: "30%",
            resizeMode: "contain",
        },
        logoText: {},
        buttonsContainer: {
            borderWidth: 5,
            borderColor: "purple",
            flex: 1,
            justifyContent: "flex-end",
            alignContent: "center",
        },
        buttonLogin: {
            color: colours.primaryColour,
        },
        buttonRegister: {
            color: colours.secondaryColour,
        },
    });

export default WelcomeScreen;
