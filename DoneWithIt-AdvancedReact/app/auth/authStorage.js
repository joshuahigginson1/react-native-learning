import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error getting the user's authToken.");
    }
};
const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log("Error storing the user's authToken.");
    }
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing the user's authToken.");
    }
};

const getUser = async () => {
    const token = await getToken();
    if (token) return jwtDecode(token);
    return null;
};

export default { removeToken, storeToken, getUser };
