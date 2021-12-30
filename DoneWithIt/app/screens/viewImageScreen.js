// Third Party Imports
import { View, StyleSheet, Image } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Local Imports
import colours from "../config/colours.js";

function ViewImageScreen() {
    return (
        <View style={handleStyles().window}>
            <View style={handleStyles().buttonContainer}>
                <MaterialCommunityIcons
                    name="close"
                    size={80}
                    style={handleStyles().closeIcon}
                ></MaterialCommunityIcons>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={80}
                    style={handleStyles().deleteIcon}
                ></MaterialCommunityIcons>
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
            alignItems: "center",
            width: "100%",
        },
        closeIcon: {
            color: colours.primaryColour,
        },
        deleteIcon: {
            color: colours.secondaryColour,
        },

        image: {
            width: useDimensions().window.width,
            height: "75%",
            resizeMode: "contain",
        },
    });

export default ViewImageScreen;
