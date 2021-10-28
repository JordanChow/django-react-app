import { Types } from "../../constants/actionTypes";

const initialState = {
    user: {
    }
  };
  
  export default function userReducer(state = initialState, action) {
    switch(action.type) {
      case Types.LOGIN_USER:
        break;
      case Types.LOGOUT_USER:
        break;
      case Types.REGISTER_USER:
        break;
      default:
        return state
    }
      
    return state;
  };