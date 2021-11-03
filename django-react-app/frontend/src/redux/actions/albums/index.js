import { Types } from "../../../constants/actionTypes"
import { getAlbumsAPI } from "../../../api/albumAPI";
import React from 'react';

export const getAllAlbums = () => (dispatch) => {
    getAlbumsAPI()
    .then(response => {
        dispatch({
            type: Types.GET_ALBUMS,
            payload: response.data
        });
    });
};
