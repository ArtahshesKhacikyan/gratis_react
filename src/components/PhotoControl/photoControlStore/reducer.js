import {
    GET_PHOTOCONTROL_LIST_SUCCESS,
    GET_PHOTOCONTROL_LIST_FAIL,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAIL
} from './actionTypes';

const initialState = {
    getPhotoCantrolDataResponse: {},
    getUserDataResponse: {}
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
        case GET_USER_DATA_SUCCESS:
            return {
                getUserDataResponse: action.payload,
            };
        case GET_USER_DATA_FAIL:
            return {
                ...state,
                errorMessage: action.message
            };
        default:
            return state;
    }
}