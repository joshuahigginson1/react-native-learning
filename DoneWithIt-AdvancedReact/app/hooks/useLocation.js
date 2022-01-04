import React, { useState, useEffect } from "react";

import * as Location from "expo-location";

const useLocation = () => {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        // Getting location is optional.

        try {
            // Request permissions.
            const { granted } =
                await Location.requestForegroundPermissionsAsync();
            if (!granted) return;
            // Check if we have lastKnownPosition.
            const lastKnown = await Location.getLastKnownPositionAsync();
            if (lastKnown)
                setLocation({
                    latitude: lastKnown.coords.latitude,
                    longitude: lastKnown.coords.longitude,
                });
            // If not, we get the current position.
            else {
                const current = await Location.getCurrentPositionAsync();
                setLocation({
                    latitude: current.coords.latitude,
                    longitude: current.coords.longitude,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return location;
};

export default useLocation;
