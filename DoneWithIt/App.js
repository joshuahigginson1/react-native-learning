// Third Party Imports
import { View, StyleSheet, Text, Platform } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// Local Imports
// import WelcomeScreen from "./app/screens/welcomeScreen.js";
import ViewImageScreen from "./app/screens/viewImageScreen";
export default function App() {
    return <ViewImageScreen></ViewImageScreen>;
}
const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
