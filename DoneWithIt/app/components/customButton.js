// Third Party Imports
import { StyleSheet, View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

// Local Imports
import AppText from "./appText.js";
import colours from "../config/colours.js";
function CustomButton({
    buttonColour = colours.primaryColour,
    title = "DEFAULT BUTTON",
}) {
    return (
        <View style={handleStyles(buttonColour).buttonContainer}>
            <AppText fontColour={colours.white} fontSize={12}>
                {title}
            </AppText>
        </View>
    );
}

const handleStyles = (buttonColour = colours.white) =>
    StyleSheet.create({
        buttonContainer: {
            backgroundColor: buttonColour,
            width: "95%",
            height: 40,
            marginBottom: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: useDimensions().window.width / 50,
        },
    });

export default CustomButton;
