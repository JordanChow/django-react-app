import { Types } from "../../../constants/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user 
  ? {isLoggedIn:true, user, error: null} 
  : {isLoggedIn: false, user: null, error: null};
  
export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case Types.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      }
    case Types.LOGOUT_USER:
      return {
        ...state,
        user: null,
        isLoggedIn: false
      };
    case Types.REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      }
    case Types.LOGIN_FAILED:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        error: action.payload
      }
    case Types.REGISTER_FAILED:
      return {
        ...state,
        user: null,
        isLoggedIn: false
      }
    default:
      return state;
    }
};