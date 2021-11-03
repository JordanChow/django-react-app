import axios from 'axios';


// Get list of all albums
export const getAlbumsAPI = () => {
    return new Promise ((resolve) =>
    {
        const response = axios.get("albums/");
        resolve(response);
    });
};
