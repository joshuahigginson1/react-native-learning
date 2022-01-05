import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";

import AppText from "./Text";
import colors from "../config/colors";

function OfflineNotice() {
    const netInfo = useNetInfo();

    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === "false") {
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>
                    You are currently offline!
                </AppText>
            </View>
        );
    }
    return null;
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        height: 50,
        width: "100%",
        position: "absolute",
        zIndex: 1,
        top: Constants.statusBarHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: colors.white,
    },
});

export default OfflineNotice;
