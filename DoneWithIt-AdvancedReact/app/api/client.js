// 3rd Party Imports

import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
    baseURL: "http://192.168.1.171:9000/api",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    // Call original function.
    const response = await get(url, params, axiosConfig);

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
