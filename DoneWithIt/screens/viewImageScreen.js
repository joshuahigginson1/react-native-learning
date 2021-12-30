import { View, StyleSheet } from "react-native";

function ViewImageScreen() {
    return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ViewImageScreen;
