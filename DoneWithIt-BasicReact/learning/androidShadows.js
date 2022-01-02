import { View, StyleSheet } from "react-native";
export default function App() {
    return (
        <View style={styles.component}>
            <View style={styles.example1}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    example1: {
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        elevation: 20,
    },
});
