import { Types } from "../../constants/actionTypes"
import axios from 'axios';

export const loginUser = (user) => {
    axios.post("insert_my_url", { user })
        .then(result => dispatch({
            type: Types.LOGIN_USER, 
            payload: result
        }));
};

export const logoutUser = (user) => ({
    type: Types.LOGOUT_USER, 
    payload: user
});

export const registerUser = (user) => ({
    type: Types.REGISTER_USER, 
    payload: user
});