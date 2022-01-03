import React, { useEffect, useState } from "react";
import { Text, Button } from "react-native";

import AuthNavigation from "./app/navigation/AuthNavigation";

const Link = () => {
    const navigation = useNavigation();
    return (
        <Button
            title="Click"
            onPress={() =>
                navigation.navigate("TweetDetails", { id: "Banana Tweet" })
            }
        />
    );
};

export default function App() {
    return <AuthNavigation />;
}
