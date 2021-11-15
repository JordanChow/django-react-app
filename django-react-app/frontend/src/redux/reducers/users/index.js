import { Types } from "../../../constants/actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: null
}
  
export default function userReducer(state = initialState, action) {
  switch(action.type) {
    // LOGIN
    case Types.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case Types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload.user,
        token: action.payload.token
      }
    case Types.LOGIN_USER_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload.message
      }

    // LOGOUT
    case Types.LOGOUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case Types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: null,
        token: null
      }
    case Types.LOGOUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      } 

    // REGISTER
    case Types.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case Types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload.user,
        token: action.payload.token
      }
    case Types.REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      } 

    // DEFAULT  
    default:
      return state;
    }
};
