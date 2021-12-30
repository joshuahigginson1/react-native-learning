// Third Party Imports
import { View, StyleSheet, Image } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

// Local Imports
import colours from "../config/colours.js";

function ViewImageScreen() {
    return (
        <View style={handleStyles().window}>
            <View style={handleStyles().buttonContainer}>
                <View style={handleStyles().closeButton}></View>
                <View style={handleStyles().deleteButton}></View>
            </View>
            <Image
                source={require("../assets/chair.jpg")}
                style={handleStyles().image}
            ></Image>
        </View>
    );
}

const handleStyles = () =>
    StyleSheet.create({
        window: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colours.black,
        },

        buttonContainer: {
            borderWidth: 5,
            borderColor: "purple",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
        },
        closeButton: {
            height: 80,
            width: 80,
            backgroundColor: colours.primaryColour,
        },
        deleteButton: {
            height: 80,
            width: 80,
            backgroundColor: colours.secondaryColour,
        },

        image: {
            width: useDimensions().window.width,
            height: "75%",
            resizeMode: "contain",
        },
    });

export default ViewImageScreen;
