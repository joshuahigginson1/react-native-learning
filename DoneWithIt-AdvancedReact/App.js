import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";

import Screen from "./app/components/Screen";

import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
    // const [imageUris, setImageUris] = useState([]);

    // const handleAdd = (uri) => {
    //     setImageUris([...imageUris, uri]);
    // };

    // const handleDelete = (uriToDelete) => {
    //     setImageUris(imageUris.filter((uri) => uri !== uriToDelete));
    // };

    // return (
    //     <ImageInputList
    //         imageUris={imageUris}
    //         onRemoveImage={handleDelete}
    //         onAddImage={handleAdd}
    //     ></ImageInputList>
    // );

    return <ListingEditScreen></ListingEditScreen>;
}
