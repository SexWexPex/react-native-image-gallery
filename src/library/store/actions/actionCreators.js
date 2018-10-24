import {FETCH_IMAGES} from './actionTypes';
const API = "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0";

export const fetchImages = () => {
    return async dispatch => {
        const response = await fetch(API, {
            method: 'GET'
        });
        const json = await response.json();

        return dispatch({type: FETCH_IMAGES, payload: json})
    }
};
