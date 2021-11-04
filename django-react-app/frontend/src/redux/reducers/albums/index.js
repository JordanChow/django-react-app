import { Types } from "../../../constants/actionTypes";

const initialState = {
    albums: [],
    loading: false,
    error: null
}
  
export default function albumReducer(state = initialState, action) {
  switch(action.type) {
    case Types.GET_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        albums: []
      }
    case Types.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        albums: action.payload
      }
    case Types.GET_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        albums: []
      }
    default:
      return state;
    }
};