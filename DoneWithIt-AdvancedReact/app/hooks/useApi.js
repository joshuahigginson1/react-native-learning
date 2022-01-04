import { useState } from "react";

export default useApi = (apiFunction) => {
    const [data, setData] = useState([]);
    const [connectError, setConnectError] = useState(false);
    const [loading, setLoading] = useState(false);

    // Send a request.
    const request = async () => {
        // Set our loading hook.
        setLoading(true);
        // Call our API function.
        const response = await apiFunction();
        setLoading(false);

        if (!response.ok) return setConnectError(true);

        setConnectError(false);
        setData(response.data);
    };

    return { request, data, loading, connectError };
};
