import { useState } from "react";

export default useApi = (apiFunction) => {
    const [data, setData] = useState([]);
    const [connectError, setConnectError] = useState(false);
    const [loading, setLoading] = useState(false);

    // Send a request.
    const request = async (...args) => {
        // Set our loading hook.
        setLoading(true);
        // Call our API function.
        const response = await apiFunction(...args);
        setLoading(false);
        setConnectError(!response.ok);
        setData(response.data);

        return response;
    };

    return { request, data, loading, connectError };
};
