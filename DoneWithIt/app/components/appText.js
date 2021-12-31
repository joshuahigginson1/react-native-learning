// Third Party Imports
import { Platform, Text, StyleSheet } from "react-native";

// Local Imports
import colours from "../config/colours.js";

function AppText({ children, fontSize = 18, fontColour = colours.black }) {
    return (
        <Text style={styles(fontSize, fontColour).textDefault}>{children}</Text>
    );
}

const styles = (fontSize = 18, fontColour = colours.primaryColour) =>
    StyleSheet.create({
        textDefault: {
            color: fontColour,
            fontWeight: "600",
            ...Platform.select({
                ios: {
                    fontFamily: "Avenir",
                    fontSize: fontSize,
                },
                android: {
                    fontFamily: "Roboto",
                    fontSize: fontSize + 6,
                },
            }),
        },
    });
export default AppText;
