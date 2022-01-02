// Third Party Imports
import { View, StyleSheet } from "react-native";

// Local Imports
import colours from "../config/colours.js";

function ItemSeparator() {
    return <View style={styles.itemSeparator}></View>;
}

const styles = StyleSheet.create({
    itemSeparator: {
        width: "100%",
        height: 5,
        backgroundColor: colours.white,
    },
});

export default ItemSeparator;
