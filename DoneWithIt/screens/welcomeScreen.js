import { View, ImageBackground, StyleSheet, Image } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

function WelcomeScreen() {
    return (
        <View style={handleStyles().container}>
            <ImageBackground
                source={require("../assets/background.jpg")}
                style={handleStyles().backgroundImage}
                resizeMode="cover"
            ></ImageBackground>
        </View>
    );
}

const handleStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        backgroundImage: {
            width: useDimensions().window.width,
            height: useDimensions().window.height,
        },
    });

export default WelcomeScreen;
