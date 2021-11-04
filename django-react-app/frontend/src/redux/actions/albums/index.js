import { Types } from "../../../constants/actionTypes"
import axios from "axios";

// Get all albums
export const getAllAlbums = () => async (dispatch) => {
    dispatch({
        type: Types.GET_ALBUMS_REQUEST
    });

    await axios.get("albums/")
    .then(response => {
        dispatch({
            type: Types.GET_ALBUMS_SUCCESS,
            payload: response.data
        });
    })
    .catch(error => {
        dispatch({
            type: Types.GET_ALBUMS_FAILURE,
            payload: error
        });
    })
};


// Get album based on id
export const getAlbum = (id) => async (dispatch) => {
    dispatch({
        type: Types.GET_ALBUM_REQUEST
    });

    await axios.get(`albums/${id}/`)
    .then(response => {
        dispatch({
            type: Types.GET_ALBUM_SUCCESS,
            payload: response.data
        });
    })
    .catch(error => {
        dispatch({
            type: Types.GET_ALBUM_FAILURE,
            payload: error
        });
    })
};