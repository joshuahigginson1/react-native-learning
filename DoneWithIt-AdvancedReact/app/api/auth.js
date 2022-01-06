import apiClient from "./client";

const authEndpoint = "/auth";

const login = (email, password) =>
    apiClient.post(authEndpoint, { email, password });

export default { login };
