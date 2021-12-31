// Third Party Imports
import { View, StyleSheet, Text, Platform } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// Local Imports

import ListingDetailsScreen from "./app/screens/listingDetailsScreen.js";

export default function App() {
    return <ListingDetailsScreen></ListingDetailsScreen>;
}
const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
