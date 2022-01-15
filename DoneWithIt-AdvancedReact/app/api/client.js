// 3rd Party Imports

import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/authStorage";
import settings from "../config/settings";

const apiClient = create({
    baseURL: settings.apiUrl,
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    // Call original function.
    const response = await get(url, params, axiosConfig);

    apiClient.addAsyncRequestTransform(async (request) => {
        const authToken = await authStorage.getToken();
        if (!authToken) return;
        request.headers["x-auth-token"] = authToken;
    });

    // If successful response, store data in our AsyncCache.
    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }

    // If not an ok response, get data from our cache.
    const data = await cache.get(url);
    // Return data in faux response object if there is data, else we return failed response.
    return data ? { ok: true, data } : response;
};

export default apiClient;
