// Third Party Imports
import React, { useState } from "react";

import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import Constants from "expo-constants";

// Local Imports

import colours from "../config/colours.js";
import Card from "../components/card.js";

const initialListings = [
    {
        id: 1,
        title: "Red Jacket",
        cost: "£100",
        imageUrl: require("../assets/jacket.jpg"),
    },
    {
        id: 2,
        title: "White Sofa",
        cost: "£500",
        imageUrl: require("../assets/couch.jpg"),
    },
    {
        id: 3,
        title: "Chair",
        cost: "£50",
        imageUrl: require("../assets/chair.jpg"),
    },
];

function ListingsScreen() {
    return (
        <SafeAreaView style={styles.window}>
            <FlatList
                data={initialListings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={item.cost}
                        image={item.imageUrl}
                    />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    window: {
        flex: 1,
        alignContent: "center",
        backgroundColor: colours.white,
        paddingTop: Constants.statusBarHeight,
    },
});
export default ListingsScreen;
