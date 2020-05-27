import {
    GET_PHOTOCONTROL_LIST_SUCCESS,
    GET_PHOTOCONTROL_LIST_FAIL
} from './actionTypes';

const initialState = {
    getPhotoCantrolDataResponse: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOCONTROL_LIST_SUCCESS:
            return {
                getPhotoCantrolDataResponse: action.payload,
            };
        case GET_PHOTOCONTROL_LIST_FAIL:
            return {
                ...state,
                errorMessage: action.message
            };
        default:
            return state;
    }
}