// Third Party Imports

import { TouchableOpacity, StyleSheet } from "react-native";

// Local Imports

import AppText from "./appText.js";

function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
});

export default PickerItem;
