// Local Imports
import apiClient from "./client.js";

const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);
export default { getListings };
