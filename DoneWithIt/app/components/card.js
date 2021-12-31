// Third Party Imports
import { View, StyleSheet, Platform, Image } from "react-native";

// Local Imports
import AppText from "./appText.js";
import colours from "../config/colours.js";

function Card({
    title = "This is a title placeholder.",
    subTitle = "This is a subtitle placeholder.",
    image,
}) {
    // If no image provided, give user a default.
    if (!image) {
        image = require("../assets/jacket.jpg");
    }
    return (
        <View style={handleStyles.card}>
            <Image style={handleStyles.image} source={image}></Image>
            {/* <View style={handleStyles.imageSection}>
                </View> */}
            <View style={handleStyles.textSection}>
                <AppText fontColour={colours.black}>{title}</AppText>
                <AppText fontColour={colours.grey} fontSize={12}>
                    {subTitle}
                </AppText>
            </View>
        </View>
    );
}

const handleStyles = StyleSheet.create({
    window: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#f8f4f4",
    },
    card: {
        backgroundColor: colours.white,
        borderRadius: 10,
        height: "40%",
        width: "90%",
        ...Platform.select({
            ios: {
                shadowColor: colours.grey,
                shadowOffset: { height: 5, width: 5 },
                shadowOpacity: 0.2,
                shadowRadius: 10,
            },
            android: {
                elevation: 10,
            },
        }),
    },
    imageSection: {
        borderColor: "green",
        borderWidth: 5,
    },
    image: {
        // Image does not inherit the border radius of card, so we need to add it again!
        flex: 3,
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textSection: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        padding: 20,
    },
});
export default Card;