// Local Imports
import apiClient from "./client.js";
const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);

const postListing = (values, onUploadProgress) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("categoryId", values.category.value);
    formData.append("description", values.description);
    values.images.forEach((image, index) => {
        formData.append("images", {
            name: "image" + index,
            type: "image/jpeg",
            uri: image,
        });
    });
    if (values.location)
        formData.append("location", JSON.stringify(values.location));
    return apiClient.post(endpoint, formData, {
        onUploadProgress: (progress) =>
            onUploadProgress(progress.loaded / progress.total),
    });
};
export default { getListings, postListing };
