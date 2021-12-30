import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function App() {
    return (
        <View style={styles.component}>
            <MaterialCommunityIcons
                name="mail"
                size={200}
                color={"dodgerblue"}
            ></MaterialCommunityIcons>
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
