// Third Party Imports
import { View, StyleSheet, Text, Platform } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// Local Imports
// import WelcomeScreen from "./app/screens/welcomeScreen.js";
// import ViewImageScreen from "./app/screens/viewImageScreen.js";
import Card from "./app/components/card.js";

export default function App() {
    return (
        <View>
            <Card
                title="Red Leather Jacket"
                subTitle="£100"
                image={require("./app/assets/jacket.jpg")}
            ></Card>
            <Card
                title="Magic"
                subTitle="£200"
                image={require("./app/assets/jacket.jpg")}
            ></Card>
        </View>
    );
}
const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
