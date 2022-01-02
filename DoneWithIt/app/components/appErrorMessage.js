// Third Party Imports
import { StyleSheet } from "react-native";

// Local Imports
import colours from "../config/colours";
import AppText from "./appText";

function AppErrorMessage({ error, visible }) {
    if (!error || !visible) return null;
    return (
        <AppText fontColour={colours.danger} fontSize={10}>
            {error}
        </AppText>
    );
}

export default AppErrorMessage;
