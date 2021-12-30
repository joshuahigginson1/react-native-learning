import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
    useDimensions,
    useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
    console.log(useDimensions);
    const deviceOrientation = useDeviceOrientation();

    return (
        <SafeAreaView style={defaultStyles.container}>
            <View style={newStyles(deviceOrientation).newView}></View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});

const handlePictureOrientation = ({ portrait, landscape }) => {
    if (landscape) {
        return "100%";
    }
    return "30%";
};

const newStyles = (props) =>
    StyleSheet.create({
        newView: {
            backgroundColor: "dodgerblue",
            width: "50%",
            height: handlePictureOrientation(props),
        },
    });
