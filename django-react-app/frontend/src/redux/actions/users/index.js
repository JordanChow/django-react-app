import { Types } from "../../../constants/actionTypes"
import axios from 'axios';
import { loginAPI } from "../../../api/userAPI";


export const loginUser = user => dispatch => {
        loginAPI(user)
        .then(response => {
            if (response.data.token) {
                localStorage.setItem("user",
                JSON.stringify(response.data.user));
                dispatch({
                    type: Types.LOGIN_USER, 
                    payload: response.data.user
                })
            }
            else {
                dispatch({
                    type: Types.LOGIN_FAILED
                })
            }
        });
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