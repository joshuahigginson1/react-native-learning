// Third Party Imports
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Local Imports
import colours from "../config/colours.js";

function ViewImageScreen() {
    return (
        <View style={styles.window}>
            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons
                    name="close"
                    size={80}
                    style={styles.closeIcon}
                ></MaterialCommunityIcons>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={80}
                    style={styles.deleteIcon}
                ></MaterialCommunityIcons>
            </View>
            <Image
                source={require("../assets/chair.jpg")}
                style={styles.image}
            ></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    window: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colours.black,
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        // Borders
        // borderWidth: 5,
        // borderColor: "purple",
    },
    closeIcon: {
        color: colours.primaryColour,
    },
    deleteIcon: {
        color: colours.secondaryColour,
    },

    image: {
        width: "100%",
        height: "75%",
        resizeMode: "contain",
    },
});

export default ViewImageScreen;
