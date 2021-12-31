// Third Party Imports
import { View, StyleSheet, Text, Platform } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// Local Imports

// import ListingDetailsScreen from "./app/screens/listingDetailsScreen.js";
import WelcomeScreen from "./app/screens/welcomeScreen.js";

export default function App() {
    return <WelcomeScreen></WelcomeScreen>;
}
const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
