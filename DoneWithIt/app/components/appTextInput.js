// Third Party Imports
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Local Imports
import colours from "../config/colours.js";
import defaultStyles from "../config/defaultStyles.js";

function AppTextInput({ iconName, ...otherProps }) {
    return (
        <View style={styles.container}>
            {/* Use Conditional Rendering to only render icon if specified. */}

            {iconName && (
                <MaterialCommunityIcons
                    name={iconName}
                    size={20}
                    color={colours.grey}
                    style={styles.icon}
                />
            )}
            <TextInput
                style={styles.textInput}
                {...otherProps}
                placeholderTextColor={colours.grey}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.greyBackground,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },
    icon: {
        paddingRight: 20,
    },
    textInput: defaultStyles.text,
});

export default AppTextInput;
