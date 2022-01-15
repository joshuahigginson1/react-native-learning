import { Button } from "react-native";
import Screen from "./app/components/Screen";

import * as Notifications from "expo-notifications";

export default function App() {
    const showLocalNotification = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "Congratulations!",
                body: "Your order was successfully placed.",
                data: {
                    _displayInForeground: true,
                },
            },
            trigger: {
                seconds: 2,
                repeats: false,
            },
        });
    };
    return (
        <Screen>
            <Button title="Tap Me!" onPress={showLocalNotification} />
        </Screen>
    );
}
