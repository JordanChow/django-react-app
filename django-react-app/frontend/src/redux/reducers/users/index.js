import { Types } from "../../constants/actionTypes";

const initialState = {
    token: ""
  };
  
  export default function userReducer(state = initialState, action) {
    switch(action.type) {
      case Types.LOGIN_USER:
        return {
          ...state,
          token: action.payload.token
        }
      case Types.LOGOUT_USER:
        break;
      case Types.REGISTER_USER:
        break;
      default:
        return state;
    }
      
    return state;
  };