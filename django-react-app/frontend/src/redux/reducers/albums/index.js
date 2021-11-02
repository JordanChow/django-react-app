import { Types } from "../../../constants/actionTypes";

const initialState = {
    albums: []
}
  
export default function albumReducer(state = initialState, action) {
  switch(action.type) {
    case Types.GET_ALBUMS:
      return {
        ...state,
        albums: action.payload
      }
    default:
      return state;
    }
};