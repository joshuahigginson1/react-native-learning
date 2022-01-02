import { View, StyleSheet } from "react-native";
export default function App() {
    return (
        <View style={styles.component}>
            <View style={styles.example1}>
                <View style={styles.example2}></View>
            </View>
            <View style={styles.example3}></View>
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
        padding: 25,
    },
    example2: {
        backgroundColor: "gold",
        width: 50,
        height: 50,
    },
    example3: {
        backgroundColor: "tomato",
        width: 100,
        height: 100,
        margin: 20,
    },
});
