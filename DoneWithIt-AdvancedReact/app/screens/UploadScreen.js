// Third Party Imports
import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import AnimatedLottieView from "lottie-react-native";

// Local Imports
import AppText from "../components/Text";
import colors from "../config/colors";

function UploadScreen({ progress = 0, visible = false, onAnimationFinish }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar
                        color={colors.primary}
                        width={200}
                        progress={progress}
                    />
                ) : (
                    <AnimatedLottieView
                        autoPlay
                        style={styles.animation}
                        loop={false}
                        onAnimationFinish={onAnimationFinish}
                        source={require("../assets/animations/done.json")}
                    />
                )}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: "center", justifyContent: "center", top: 200 },
    animation: { width: 300 },
});

export default UploadScreen;
