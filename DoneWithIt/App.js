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
import AppTextInput from "./app/components/appTextInput.js";
import AppPicker from "./app/components/appPicker.js";
import { useState } from "react";
import LoginScreen from "./app/screens/loginScreen.js";

export default function App() {
    return <LoginScreen></LoginScreen>;
}

// const categories = [
//     { label: "Furniture", id: 1 },
//     { label: "Clothing", id: 2 },
//     { label: "Cameras", id: 3 },
// ];

// export default function App() {
//     const [category, setCategory] = useState(categories[0]);
//     return (
//         <AppPicker
//             iconName="apps"
//             placeholder="Email"
//             selectedItem={category}
//             onSelectItem={(item) => setCategory(item)}
//             categories={categories}
//         ></AppPicker>
//     );
// }

const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
