import AnimatedLottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

const ActivityIndicator = ({ visible = false }) => {
    if (!visible) return null;
    return (
        <View style={styles.overlay}>
            <AnimatedLottieView
                source={require("../assets/animations/loader.json")}
                autoPlay
                loop
            />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: colors.white,
        zIndex: 1,
        opacity: 0.6,
    },
});

export default ActivityIndicator;
