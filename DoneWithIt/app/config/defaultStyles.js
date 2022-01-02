// Third Party Imports
import { Platform } from "react-native";
import Constants from "expo-constants";

// Local Imports
import colours from "./colours.js";

export default {
    text: {
        color: colours.darkGrey,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    window: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
};
