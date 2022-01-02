import { View, StyleSheet, Text, Platform } from "react-native";
export default function App() {
    return (
        <View style={styles.component}>
            <Text style={styles.example1}>I love react!</Text>
        </View>
    );
}

const handleFonts = () => {
    if (Platform.OS === "android") return "Roboto";
    return "Avenir";
};

const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    example1: { fontSize: 30, fontFamily: handleFonts() },
});
