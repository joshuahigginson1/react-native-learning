// Third Party Imports
import React from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";
import * as Yup from "yup";

// Local Imports

import defaultStyles from "../config/defaultStyles";
import {
    AppFormField,
    AppSubmitButton,
    AppFormik,
    AppFormPicker,
} from "../components/forms";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(3).max(40).label("Title"),
    price: Yup.number().required().min(0).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().max(500).label("Description"),
});

const categories = [
    {
        id: 0,
        label: "Furniture",
        iconName: "floor-lamp",
        iconColour: "#fc5c65",
    },
    { id: 1, label: "Cars", iconName: "car", iconColour: "#fd9644" },
    { id: 2, label: "Cameras", iconName: "camera", iconColour: "#fed330" },
    { id: 3, label: "Games", iconName: "cards", iconColour: "#26de81" },
    { id: 4, label: "Clothing", iconName: "shoe-heel", iconColour: "#2bcbba" },
    { id: 5, label: "Sports", iconName: "basketball", iconColour: "#45aaf2" },
    {
        id: 6,
        label: "Movies & Music",
        iconName: "headphones",
        iconColour: "#4b7bec",
    },
];

function ListEditingScreen() {
    return (
        <SafeAreaView style={styles.window}>
            <AppFormik
                initialValues={{
                    title: "",
                    price: "",
                    category: "",
                    description: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    placeholder="Title"
                    autoCapitalize="words"
                    autoCorrect={false}
                    keyboardType="default"
                    fieldName="title"
                />
                <AppFormField
                    placeholder="Price"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                    fieldName="price"
                    width="50%"
                />
                <AppFormPicker
                    fieldName="category"
                    categories={categories}
                    iconName="apps"
                />
                <AppFormField
                    placeholder="Description"
                    autoCapitalize="none"
                    autoCorrect={true}
                    keyboardType="default"
                    fieldName="description"
                />
                <AppSubmitButton title="POST LISTING" />
            </AppFormik>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    window: {
        ...defaultStyles.window,
        marginHorizontal: "5%",
        alignItems: "flex-start",
    },
});

export default ListEditingScreen;
