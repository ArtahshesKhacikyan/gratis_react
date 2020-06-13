import {
    GET_PHOTOCONTROL_LIST_SUCCESS,
    GET_PHOTOCONTROL_LIST_FAIL,
    GET_DRIVER_COUNTRIES_LIST,
    GET_DRIVER_COUNTRIES_LIST_FAIL,
    GET_USER_CATEGORY_SUCCESS,
    GET_USER_CATEGORY_FAIL,
    GET_CAR_LIST_SUCCESS,
    GET_CAR_LIST_FAIL,
    VERIFY_PHOTOCONTROL_SUCCESS,
    VERIFY_PHOTOCONTROL_FAIL
} from './actionTypes';

const initialState = {
    getCountryListResponse: {},
    getPhotoCantrolDataResponse: {},
    getUserCategoryResposne: {},
    getCarsListResponse: {},
    verifyPhotocontrolRespose: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOCONTROL_LIST_SUCCESS:
            return {
                ...state,
                getPhotoCantrolDataResponse: action.payload,
            };
        case GET_PHOTOCONTROL_LIST_FAIL:
            return {
                ...state,
                errorMessage: action.message
            };
        case GET_DRIVER_COUNTRIES_LIST:
            return {
                ...state,
                getCountryListResponse: action.payload,
            };
        case GET_DRIVER_COUNTRIES_LIST_FAIL:
            return {
                ...state,
                errorMessage: action.message
            };
        case GET_USER_CATEGORY_SUCCESS:
            return {
                ...state,
                getUserCategoryResposne: action.payload,
            };
        case GET_USER_CATEGORY_FAIL:
            return {
                ...state,
                errorMessage: action.message
            };
        case GET_CAR_LIST_SUCCESS:
            return {
                ...state,
                getCarsListResponse: action.payload,
            };
        case GET_CAR_LIST_FAIL:
            return {
                ...state,
                errorMessage: action.message
            };
        case VERIFY_PHOTOCONTROL_SUCCESS:
            return {
                ...state,
                verifyPhotocontrolRespose: action.payload,
            };
        case VERIFY_PHOTOCONTROL_FAIL:
            return {
                ...state,
                errorMessage: action.message
            };
        default:
            return state;
    }
}