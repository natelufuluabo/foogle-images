import axios from "axios";

export const fetchImages = async (userInput) => {
    const response = (await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID OsBy8xMbZfsf4qQCXJ-y_dSTXE7bFdXy2AsfJmZjIJo'
        },
        params: {
            query: userInput
        }
    })).data.results;


    return response;
};