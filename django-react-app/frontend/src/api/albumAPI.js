import axios from 'axios';


// Get list of all albums
export const getAlbumsAPI = () => {
    return new Promise((resolve) =>
    {
        const response = await axios.get("albums/");
        resolve(response);
    });
};
