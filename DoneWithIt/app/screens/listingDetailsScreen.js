// Third Party Imports
import { View, StyleSheet, Image } from "react-native";

// Local Imports
import colours from "../config/colours.js";
import AppText from "../components/appText.js";

// Resize using CONTAINER Flex.

function ListingDetailsScreen() {
    return (
        <View style={styles.window}>
            {/* Content at Top of Image */}
            <View style={styles.cardContentContainer}>
                <Image
                    style={styles.cardImage}
                    source={require("../assets/jacket.jpg")}
                />
                <View style={styles.cardContentContainerTextSection}>
                    <AppText fontColour={colours.black}>Red Jacket</AppText>
                    <AppText fontColour={colours.grey}>£100</AppText>
                </View>
            </View>
            {/* Listing Info */}
            <View style={styles.listingInfoContainer}>
                {/* Seller Info */}
                <View style={styles.sellerContainer}>
                    <Image
                        style={styles.sellerImage}
                        source={require("../assets/mosh.jpg")}
                    />
                    <View style={styles.sellerTextContainer}>
                        <AppText fontColour={colours.black}>
                            Seller Name
                        </AppText>
                        <AppText fontColour={colours.primaryColour}>
                            Listings: 5
                        </AppText>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    window: {
        flex: 1,
        // backgroundColor: "yellow",
    },
    cardContentContainer: {
        flex: 1,
        // Borders
        // borderColor: "green",
        // borderWidth: 5,
    },
    cardImage: {
        flex: 4,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    cardContentContainerTextSection: {
        flex: 1,
        padding: "5%",
        // Borders
        // borderColor: "purple",
        // borderWidth: 5,
    },
    listingInfoContainer: {
        flex: 2,
        // Borders
        // borderColor: "red",
        // borderWidth: 5,
    },
    sellerContainer: {
        flex: 0.15,
        backgroundColor: colours.greyBackground,

        width: "100%",
        height: 100,
        alignItems: "center",

        // Will be laid out in a row rather than column.
        flexDirection: "row",

        // Borders
        // borderColor: "white",
        // borderWidth: 5,
    },
    sellerImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 30,
    },
    sellerTextContainer: {
        marginLeft: 30,
    },
});
export default ListingDetailsScreen;
