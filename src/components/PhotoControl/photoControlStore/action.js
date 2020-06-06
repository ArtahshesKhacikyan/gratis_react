import {
    GET_PHOTOCONTROL_LIST_SUCCESS,
    GET_PHOTOCONTROL_LIST_FAIL,
    GET_DRIVER_COUNTRIES_LIST_FAIL,
    GET_DRIVER_COUNTRIES_LIST
} from './actionTypes';

import constants from '../../../resources/constants';
import {
    tokenizedApiCaller,
    headerConfig
} from '../../../clients/tokenizedApiCaller';

export const getPhotocontrolData = () => async (dispatch) => {
    try {
        const { data } = await tokenizedApiCaller.post(constants.api + 'photocontrol/', {}, headerConfig);
        console.log('getPhotocontrolData', data)

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
        console.log('getDriverCountryList', data)
        dispatch({
            type: GET_DRIVER_COUNTRIES_LIST,
            payload: data,
            status: data.status
        });
    } catch (error) {
        console.log("---getDriverCountryList Error-------", error)
        dispatch({
            type: GET_DRIVER_COUNTRIES_LIST_FAIL,
            message: error
        })
    }
};

