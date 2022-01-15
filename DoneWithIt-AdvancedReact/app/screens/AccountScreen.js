import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import logger from "../utility/logger";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        location: "Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    },
];

function AccountScreen(props) {
    const navigation = useNavigation();
    const { user, setUser, handleLogOut } = useAuth();

    logger.logMessage("Hello this is a test!");

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require("../assets/mosh.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            onPress={() => {
                                if (item.location) {
                                    navigation.navigate(item.location);
                                }
                            }}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
                onPress={handleLogOut}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});

export default AccountScreen;
