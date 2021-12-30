import { View, StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.child1}></View>
            <View style={styles.child2}></View>
            <View style={styles.child3}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
    },
    child1: {
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
    },
    child2: {
        backgroundColor: "gold",
        width: 100,
        height: 100,
    },
    child3: {
        backgroundColor: "tomato",
        height: 100,
        width: 100,
    },
});
