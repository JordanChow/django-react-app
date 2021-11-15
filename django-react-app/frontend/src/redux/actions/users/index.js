import axios from "axios";
import { Types } from "../../../constants/actionTypes"

export const loginUser = user => async (dispatch) => {
    dispatch({
        type: Types.LOGIN_USER_REQUEST
    });

    await axios.post("users/login/", user)
    .then(response => {  
        dispatch({
            type: Types.LOGIN_USER_SUCCESS, 
            payload: response.data
        });
        return Promise.resolve();
    })
    .catch(error => {
        dispatch({
            type: Types.LOGIN_USER_FAILURE,
            payload: error
        })
    })
};

export const logoutUser = (token) => async (dispatch) => {
    dispatch({
        type: Types.LOGOUT_USER_REQUEST
    });

    await axios.post("users/logout/", {}, {
            headers: {
                'Authorization': `Token ${token}` 
            }
        }
    )
    .then(() => {
        dispatch({
            type: Types.LOGOUT_USER_SUCCESS
        });
    })
    .catch(error => {
        dispatch({
            type: Types.LOGOUT_USER_FAILURE,
            payload: error
        });
    })
};

export const registerUser = (user) => async (dispatch) => {
    dispatch({
        type: Types.REGISTER_USER_REQUEST
    });
    
    await axios.post("users/register/", user)
    .then((response) => {
        dispatch({
            type: Types.REGISTER_USER_SUCCESS, 
            payload: response.data
        })
        return Promise.resolve();
    })
    .catch(error => {
        dispatch({
            type: Types.REGISTER_USER_FAILURE,
            payload: error
        })
    });
}

