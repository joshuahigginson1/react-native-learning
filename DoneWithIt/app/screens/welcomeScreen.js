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
import CustomButton from "../components/customButton.js";
import AppText from "../components/appText.js";

function WelcomeScreen() {
    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            style={handleStyles().backgroundImage}
            blurRadius={20}
        >
            <View style={handleStyles().logoContainer}>
                <Image
                    source={require("../assets/logo-red.png")}
                    style={handleStyles().logo}
                    // resizeMode="contain"
                />
                <AppText fontColour={colours.black}>
                    Sell what you don't need!
                </AppText>
            </View>

            <SafeAreaView style={handleStyles().buttonsContainer}>
                <CustomButton
                    buttonColour={colours.primaryColour}
                    title="LOGIN"
                ></CustomButton>
                <CustomButton
                    buttonColour={colours.secondaryColour}
                    title="REGISTER"
                ></CustomButton>
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
            // borderWidth: 5,
            // borderColor: "red",
            flex: 3,
            alignItems: "center",
            top: "10%",
        },
        logo: {
            height: "30%",
            width: "30%",
            resizeMode: "contain",
            marginBottom: 10,
        },
        buttonsContainer: {
            // borderWidth: 5,
            // borderColor: "purple",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
        },
    });

export default WelcomeScreen;
