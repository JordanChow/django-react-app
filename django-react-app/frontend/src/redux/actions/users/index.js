import { Types } from "../../constants/actionTypes"
import axios from 'axios';


export const loginUser = user => {
    return (dispatch) => {
        axios.post("users/login/", user)
        .then(response => {
            if (response.data.token) {
                localStorage.setItem("user",
                JSON.stringify(response.data.user));
            }
            dispatch({
                type: Types.LOGIN_USER, 
                payload: response.data.user
            })
        });
    }
};

export const logoutUser = () => {
    return (dispatch) => {
        axios.post("users/logout/")
        .then(() => {
            localStorage.removeItem("user");
            dispatch({
                type: Types.LOGOUT_USER
            });
        });
    }
};

export const registerUser = (user) => ({
    type: Types.REGISTER_USER, 
    payload: user
});