import axios from 'axios';


export const loginAPI = (user) => {
    return new Promise((resolve) =>
    {
        const response = await axios.post("users/login/", user);
        resolve(response);
    });
};
