import {
    GET_PHOTOCONTROL_LIST_SUCCESS,
    GET_PHOTOCONTROL_LIST_FAIL,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAIL

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

export const getUserData = (id) => async (dispatch) => {
    try {
        const { data } = await tokenizedApiCaller.post(constants.api + 'photocontrol/' + id, {}, headerConfig);
        dispatch({
            type: GET_USER_DATA_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_USER_DATA_FAIL,
            message: error
        })
    }
};
