// This function sends a message to the server.

import apiClient from "./client";

const endpoint = "/messages";

const registerMessage = (message, listingId) =>
    apiClient.post(endpoint, { message, listingId });

export default { registerMessage };
