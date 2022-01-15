import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import expoPushTokens from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
    const registerForPushNotifications = async () => {
        try {
            const permission = await Notifications.requestPermissionsAsync();
            if (!permission.granted) return;
            const pushTokenObject = await Notifications.getExpoPushTokenAsync();
            const test = await expoPushTokens.registerPushToken(
                pushTokenObject.data
            );
        } catch (error) {
            console.log("Error getting a push token:", error);
        }
    };

    if (notificationListener)
        Notifications.addNotificationResponseReceivedListener(
            notificationListener
        );

    useEffect(() => registerForPushNotifications(), []);
};
