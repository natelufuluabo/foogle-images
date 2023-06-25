import axios from "axios";

const fetchImages = async (userInput) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID OsBy8xMbZfsf4qQCXJ-y_dSTXE7bFdXy2AsfJmZjIJo'
        },
        params: {
            query: userInput
        }
    });

    return response.data.results;
};

export default fetchImages;