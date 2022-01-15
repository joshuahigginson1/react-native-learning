import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

import logger from "./logger";

const cachePrefix = "cache";
const expiryInMinutes = 5;

// A function to store data to Async Storage.
const store = async (key, value) => {
    try {
        const item = { value, timestamp: Date.now() };
        await AsyncStorage.setItem(
            `${cachePrefix}-${key}`,
            JSON.stringify(item)
        );
    } catch (error) {
        logger.logException(error);
    }
};

const isExpired = (item) => {
    // Creating a moment of current time.
    const now = dayjs();
    // Converting our stored time to a moment.
    const storedTime = dayjs(item.timestamp);
    // Getting difference between stored now and the stored time in minutes.
    return now.diff(storedTime, "minute") > expiryInMinutes;
};

const get = async (key) => {
    try {
        const storedItem = await AsyncStorage.getItem(key);
        const item = JSON.parse(storedItem);

        if (!item) return null;

        if (isExpired(item)) {
            await AsyncStorage.removeItem(`${cachePrefix}-${key}`);
        }

        return item;
    } catch (error) {
        logger.logException(error);
    }
    return;
};

export default { store };
