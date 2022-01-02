// Third Party Imports
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, FlatList, Image } from "react-native";
import Constants from "expo-constants";

// Local Imports
import SettingsButton from "../components/settingsButton.js";
import colours from "../config/colours.js";
import AppText from "../components/appText.js";
import ItemSeparator from "../components/itemSeparator.js";

const initialSettings = [
    {
        id: 1,
        title: "My Listings",
        iconName: "format-list-bulleted",
        iconColour: colours.primaryColour,
    },
    {
        id: 2,
        title: "My Emails",
        iconName: "email",
        iconColour: colours.secondaryColour,
    },
];

function MyAccount() {
    return (
        <SafeAreaView style={styles.window}>
            {/* Account Info */}
            <View style={styles.accountContainer}>
                <Image
                    style={styles.accountImage}
                    source={require("../assets/mosh.jpg")}
                />
                <View style={styles.accountTextContainer}>
                    <AppText fontColour={colours.black}>Account Name</AppText>
                    <AppText fontColour={colours.primaryColour}>
                        Account Email Address
                    </AppText>
                </View>
            </View>
            <View style={styles.listWrapper}>
                <FlatList
                    data={initialSettings}
                    keyExtractor={(setting) => setting.id}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => (
                        <SettingsButton
                            title={item.title}
                            iconColour={item.iconColour}
                            iconName={item.iconName}
                        />
                    )}
                />
            </View>
            <SettingsButton
                title="Log Out"
                iconName="logout"
                iconColour={colours.gold}
            ></SettingsButton>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    window: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    accountContainer: {
        flex: 0.15,
        backgroundColor: colours.greyBackground,

        width: "100%",
        height: 100,
        alignItems: "center",

        // Will be laid out in a row rather than column.
        flexDirection: "row",

        // Borders
        borderColor: "white",
        borderWidth: 5,
    },
    accountImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 30,
    },
    accountTextContainer: {
        marginLeft: 30,
    },
    listWrapper: {
        marginVertical: 50,
        flex: 0.5,
    },
});
export default MyAccount;
