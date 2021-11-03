import { Types } from "../../../constants/actionTypes"
import { loginAPI, logoutAPI, registerAPI } from "../../../api/userAPI";


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
    })
    .catch(error => {
        dispatch({
            type: Types.LOGIN_FAILED,
            payload: error
        })
    })
    return Promise.resolve()
};

export const logoutUser = () => dispatch => {
    logoutAPI()
    .then(() => {
        localStorage.removeItem("user");
        dispatch({
            type: Types.LOGOUT_USER
        });
    });
};

export const registerUser = (user) => dispatch => {
    registerAPI(user)
    .then((response) => {
        if(response.data.token)
        {
            dispatch({
                type: Types.REGISTER_USER, 
                payload: response.data
            })
        }
        else {
            dispatch({
                type: Types.REGISTER_FAILED
            })
        }
    });
};