// Third Party Imports
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Modal,
    Button,
    SafeAreaView,
    FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";

// Local Imports
import colours from "../config/colours.js";
import AppText from "./appText.js";
import PickerItem from "./pickerItem.js";

function AppPicker({
    categories,
    iconName,
    onSelectItem,
    placeholder,
    selectedItem,
}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
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
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colours.grey}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <SafeAreaView>
                    <Button
                        onPress={() => setModalVisible(false)}
                        title="Close Modal"
                    />
                    <FlatList
                        data={categories}
                        keyExtractor={(category) => category.id.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    ></FlatList>
                </SafeAreaView>
            </Modal>
        </React.Fragment>
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
    text: { flex: 1, textTransform: "capitalize" },
});

export default AppPicker;
