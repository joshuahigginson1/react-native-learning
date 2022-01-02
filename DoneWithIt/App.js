// Third Party Imports
import { View, StyleSheet, Text, Platform } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// Local Imports

import ListingDetailsScreen from "./app/screens/listingDetailsScreen.js";
import WelcomeScreen from "./app/screens/welcomeScreen.js";
import ViewImageScreen from "./app/screens/viewImageScreen.js";
import MessagesScreen from "./app/screens/messagesScreen.js";
import ListingsScreen from "./app/screens/listingsScreen.js";
import MyAccount from "./app/screens/myAccount.js";
import LoginScreen from "./app/screens/loginScreen.js";
import RegisterScreen from "./app/screens/registerScreen.js";

export default function App() {
    return <RegisterScreen></RegisterScreen>;
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
