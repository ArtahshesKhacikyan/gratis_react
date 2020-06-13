import {
    GET_PHOTOCONTROL_LIST_SUCCESS,
    GET_PHOTOCONTROL_LIST_FAIL,
    GET_DRIVER_COUNTRIES_LIST_FAIL,
    GET_DRIVER_COUNTRIES_LIST,
    GET_USER_CATEGORY_SUCCESS,
    GET_USER_CATEGORY_FAIL,
    GET_CAR_LIST_SUCCESS,
    GET_CAR_LIST_FAIL,
    VERIFY_PHOTOCONTROL_SUCCESS,
    VERIFY_PHOTOCONTROL_FAIL
} from './actionTypes';

import constants from '../../../resources/constants';
import {
    tokenizedApiCaller,
    headerConfig
} from '../../../clients/tokenizedApiCaller';

export const getPhotocontrolData = () => async (dispatch) => {
    try {
        const { data } = await tokenizedApiCaller.post(constants.api + 'photocontrol/', {}, headerConfig);
        dispatch({
            type: GET_PHOTOCONTROL_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_PHOTOCONTROL_LIST_FAIL,
            message: error
        })
    }
};

export const getDriverCountryList = () => async (dispatch) => {
    try {
        const { data } = await tokenizedApiCaller.post(constants.api + 'tariffZone/countries', {}, headerConfig);
        dispatch({
            type: GET_DRIVER_COUNTRIES_LIST,
            payload: data,
            status: data.status
        });
    } catch (error) {
        dispatch({
            type: GET_DRIVER_COUNTRIES_LIST_FAIL,
            message: error
        })
    }
};


export const getUserCategory = () => async (dispatch) => {
    try {
        const { data } = await tokenizedApiCaller.post(constants.api + 'tariffZone/transportType', {}, headerConfig);
        dispatch({
            type: GET_USER_CATEGORY_SUCCESS,
            payload: data,
            status: data.status
        });
    } catch (error) {
        dispatch({
            type: GET_USER_CATEGORY_FAIL,
            message: error
        })
    }
};

export const getCarsList = () => async (dispatch) => {
    try {
        const { data } = await tokenizedApiCaller.post(constants.api + 'cars', {}, headerConfig);
        dispatch({
            type: GET_CAR_LIST_SUCCESS,
            payload: data,
            status: data.status
        });
    } catch (error) {
        dispatch({
            type: GET_CAR_LIST_FAIL,
            message: error
        })
    }
};

export const verifyPhotocontrol = (userId, values) => async (dispatch) => {
    try {
        const { data } = await tokenizedApiCaller.post(constants.api + userId, values, headerConfig);
        dispatch({
            type: VERIFY_PHOTOCONTROL_SUCCESS,
            payload: data,
            status: data.status
        });
    } catch (error) {
        dispatch({
            type: VERIFY_PHOTOCONTROL_FAIL,
            message: error
        })
    }
};



