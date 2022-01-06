import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import listingsApi from "../api/listingsApi";
import Button from "../components/Button";
import AppText from "../components/Text";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen(props) {
    const navigation = useNavigation();
    const {
        data: listings,
        connectError,
        loading,
        request: loadListings,
    } = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {connectError && (
                    <>
                        <AppText>
                            Couldn't retrieve listings from server.
                        </AppText>
                        <Button onPress={loadListings} title="Retry"></Button>
                    </>
                )}
                <FlatList
                    data={listings}
                    keyExtractor={(listing) => listing.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            subTitle={"£" + item.price}
                            imageUrl={item.images[0].url}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                            onPress={() =>
                                navigation.navigate("ListingDetails", item)
                            }
                        />
                    )}
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

export default ListingsScreen;
