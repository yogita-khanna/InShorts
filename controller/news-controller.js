import { data } from "../constants/data.js";

export const getNews = async (request, response) => {
    try {
        // Assuming 'data' is an array of news objects
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
