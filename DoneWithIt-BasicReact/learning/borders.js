import { View, StyleSheet } from "react-native";
export default function App() {
    return (
        <View style={styles.component}>
            <View style={styles.example1}></View>
            <View style={styles.example2}></View>
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
        borderWidth: 3,
        borderTopLeftRadius: 5,
        borderColor: "blue",
    },
    example2: {
        backgroundColor: "purple",
        width: 100,
        height: 100,
        borderColor: "black",
        borderWidth: 5,
        borderRadius: 50, // Setting our border radius to half of our width.
    },
});
