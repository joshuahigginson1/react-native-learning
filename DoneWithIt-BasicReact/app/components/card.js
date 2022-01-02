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
        <View style={styles.card}>
            <Image style={styles.image} source={image}></Image>
            <View style={styles.textSection}>
                <AppText fontColour={colours.black}>{title}</AppText>
                <AppText
                    numberOfLines={10}
                    fontColour={colours.grey}
                    fontSize={12}
                >
                    {subTitle}
                </AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colours.white,
        borderRadius: 10,
        flex: 1,
        height: 200,
        width: "90%",
        marginHorizontal: "5%",
        overflow: "hidden",
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
    image: {
        flex: 3,
        width: "100%",
        height: "100%",
        // Image does not inherit the border radius of card, so we need to add it again!
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
    },
    textSection: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        padding: 20,
    },
});
export default Card;
