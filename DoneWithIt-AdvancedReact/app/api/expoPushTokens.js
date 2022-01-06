import apiClient from "./client";

const endpoint = "/expoPushTokens";

const registerPushToken = (token) => apiClient.post(endpoint, { token });

export default { registerPushToken };
