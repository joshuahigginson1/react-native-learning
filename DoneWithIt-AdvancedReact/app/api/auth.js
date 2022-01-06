import apiClient from "./client";

const loginEndpoint = "/auth";
const registerEndpoint = "/users";

const login = (email, password) =>
    apiClient.post(loginEndpoint, { email, password });

const register = (userInfo) => apiClient.post(registerEndpoint, userInfo);
export default { login, register };
