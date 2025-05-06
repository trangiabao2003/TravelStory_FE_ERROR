import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
    const formData = new FormData();
    // Append the file to the form data
    formData.append("image", imageFile);
     
    try {
        const response = await axiosInstance.post("/image-upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data", //Set header for file upload
            },
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error; // Rethrow the error for further handling if needed
    }
}

export default uploadImage;