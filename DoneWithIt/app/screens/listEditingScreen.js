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
    { id: 0, label: "Chairs" },
    { id: 1, label: "Cameras" },
    { id: 2, label: "Furniture" },
    { id: 3, label: "Clothes" },
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
                />
                <AppFormPicker
                    fieldName="category"
                    categories={categories}
                    iconName="account"
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
        alignItems: "center",
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 50,
    },
});

export default ListEditingScreen;
