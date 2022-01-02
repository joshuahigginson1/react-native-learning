// Third Party Imports
import React, { useState } from "react";

import {
    FlatList,
    StyleSheet,
    View,
    Image,
    SafeAreaView,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Constants from "expo-constants";
import Swipeable from "react-native-gesture-handler/Swipeable";

// Local Imports
import colours from "../config/colours.js";
import AppText from "../components/appText.js";
import ItemSeparator from "../components/itemSeparator.js";

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description:
            "This is a really really really really really really really really long description",
        userImage: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        userImage: require("../assets/mosh.jpg"),
    },
];

function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (messageToDelete) => {
        // Delete the message from messages flatlist.
        console.log(messageToDelete);
        const newMessages = messages.filter(
            (messageToFilter) => messageToFilter.id !== messageToDelete.id
        );
        setMessages(newMessages);

        // Call and delete message from server.
    };

    return (
        <SafeAreaView style={styles.window}>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                refreshing={refreshing}
                onRefresh={() =>
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            userImage: require("../assets/mosh.jpg"),
                        },
                    ])
                }
                ItemSeparatorComponent={() => <ItemSeparator />}
                renderItem={({ item }) => (
                    <Swipeable
                        renderRightActions={() => (
                            <TouchableWithoutFeedback
                                onPress={() => handleDelete(item)}
                            >
                                <View style={styles.renderRightActions}>
                                    <MaterialCommunityIcons
                                        name="trash-can"
                                        color={colours.white}
                                        size={35}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    >
                        <TouchableHighlight
                            onPress={() => console.log()}
                            underlayColor={colours.black}
                        >
                            <View style={styles.sellerContainer}>
                                <Image
                                    style={styles.sellerImage}
                                    source={item.userImage}
                                />
                                <View style={styles.sellerTextContainer}>
                                    <AppText fontColour={colours.black}>
                                        {item.title}
                                    </AppText>
                                    <AppText
                                        numberOfLines={2}
                                        fontColour={colours.primaryColour}
                                    >
                                        {item.description}
                                    </AppText>
                                </View>
                                <MaterialCommunityIcons
                                    name="chevron-right"
                                    size={25}
                                    style={styles.sellerChevron}
                                />
                            </View>
                        </TouchableHighlight>
                    </Swipeable>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    window: {
        backgroundColor: colours.white,
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    sellerContainer: {
        backgroundColor: colours.greyBackground,
        flex: 2,

        alignItems: "center",
        justifyContent: "flex-start",

        // Will be laid out in a row rather than column.
        flexDirection: "row",
    },
    renderRightActions: {
        backgroundColor: colours.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    renderLeftActions: {},
    sellerImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 30,
    },
    sellerTextContainer: {
        marginLeft: 30,
        width: "60%",
        marginVertical: 10,
    },
});

export default MessagesScreen;
