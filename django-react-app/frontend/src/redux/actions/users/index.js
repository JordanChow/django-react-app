import { Types } from "../../constants/actionTypes"

export const loginUser = (user) => ({
    type: Types.LOGIN_USER, 
    payload: user
});

export const logoutUser = (user) => ({
    type: Types.LOGOUT_USER, 
    payload: user
});

export const registerUser = (user) => ({
    type: Types.REGISTER_USER, 
    payload: user
});