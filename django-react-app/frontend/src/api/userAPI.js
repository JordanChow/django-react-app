import axios from 'axios';


export const loginAPI = (user) => {
    return new Promise((resolve) =>
    {
        const response = axios.post("users/login/", user);
        resolve(response);
    });
};

export const logoutAPI = () => {
    return new Promise((resolve) => {
        const response = axios.post("users/logout/");
        resolve(response);
    })
}

export const registerAPI = (user) => {
    return new Promise((resolve) => {
        const response = axios.post("users/register/", user);
        resolve(response);
    })
}