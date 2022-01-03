// Third Party Imports
import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

// Local Imports
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
    const { errors, values, setFieldValue, touched } = useFormikContext();

    // Set alias.
    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
    };

    const handleDelete = (uriToDelete) => {
        setFieldValue(
            name,
            imageUris.filter((uri) => uri !== uriToDelete)
        );
    };
    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onRemoveImage={handleDelete}
                onAddImage={handleAdd}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({});

export default FormImagePicker;
