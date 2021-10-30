import { Types } from "../../constants/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user 
  ? {isLoggedIn:true, user} 
  : {isLoggedIn: false, user: null};
  
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
      break;
    default:
      return state;
    }
};