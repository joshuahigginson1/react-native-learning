// Third Party Imports

import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Local Imports

import AppText from "./appText.js";
import colours from "../config/colours.js";
function PickerItem({ label, onPress, iconColour, iconName = "apps" }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.component}>
                <View
                    style={[handleColour(iconColour).icon, styles.iconWrapper]}
                >
                    <MaterialCommunityIcons
                        name={iconName}
                        size={30}
                        color={colours.white}
                    />
                </View>
                <AppText style={styles.text} fontSize={16}>
                    {label}
                </AppText>
            </View>
        </TouchableOpacity>
    );
}

const handleColour = (selectedColour) => {
    if (!selectedColour)
        return StyleSheet.create({
            icon: { backgroundColor: colours.primaryColour },
        });
    return StyleSheet.create({ icon: { backgroundColor: selectedColour } });
};

const styles = StyleSheet.create({
    component: {
        backgroundColor: colours.white,
        alignItems: "center",
        width: 100,
        flex: 1,
        margin: 10,
    },
    iconWrapper: {
        padding: 15,
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginTop: 5,
        textAlign: "center",
    },
});

export default PickerItem;
