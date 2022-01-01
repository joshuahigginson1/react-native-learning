// Third Party Imports
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Local Imports
import AppText from "./appText.js";
import colours from "../config/colours.js";

function SettingsButton({ iconName, iconColour, title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={handleStyles(iconColour).button}>
                <View style={handleStyles(iconColour).iconBox}>
                    <MaterialCommunityIcons
                        name={iconName}
                        color={colours.white}
                        size={25}
                    />
                </View>
                <AppText>{title}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const handleStyles = (iconColour = colours.primaryColour) =>
    StyleSheet.create({
        button: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colours.greyBackground,

            // borderColor: "black",
            // borderWidth: 5,
        },
        iconBox: {
            height: 40,
            width: 40,
            borderRadius: 25,
            backgroundColor: iconColour,
            marginLeft: "5%",
            marginRight: "10%",
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center",
        },
    });

export default SettingsButton;
