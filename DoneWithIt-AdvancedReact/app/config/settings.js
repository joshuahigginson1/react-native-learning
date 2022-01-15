import Constants from "expo-constants";

const settings = {
    dev: {
        apiUrl: "http://192.168.1.171:9000/api",
    },
    staging: {
        apiUrl: "http://192.168.1.171:9000/api",
    },
    production: {
        apiUrl: "http://192.168.1.171:9000/api",
    },
};

const getCurrentSettings = () => {
    // Check if we are in dev environment.
    if (__DEV__) return settings.dev;
    // Check if we are in staging or prod.
    if (Constants.manifest.releaseChannel === "staging")
        return settings.staging;

    // Now, we are in prod.
    return settings.production;
};

export default getCurrentSettings();
