import {FETCH_IMAGES} from './../actions/actionTypes';

const initialState = {
    data: null,
};

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGES:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};
