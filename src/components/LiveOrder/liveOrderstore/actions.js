// import { reduxStore } from '../../../reduxStore';
import {
    GET_ORDER_LIST,
    GET_ORDER_LIST_FAIL,
    GET_ORDER_LEFT_LIST,
    GET_ORDER_LEFT_LIST_FAIL
} from './actionTypes';
import constants from '../../../resources/constants';
import {
    tokenizedApiCaller,
    headerConfig
} from '../../../clients/tokenizedApiCaller';

export const getOrderList = () => async (dispatch) => {
    try {
        const { data } = await tokenizedApiCaller.post(constants.api + 'orders/list', {}, headerConfig);
        dispatch({
            type: GET_ORDER_LIST,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_ORDER_LIST_FAIL,
            message: error
        })
    }
};


export const getOrderLeftList = () => async (dispatch) => {
    try {
        const { data } = await tokenizedApiCaller.post(constants.api + 'orders/leftList', {}, headerConfig);
        dispatch({
            type: GET_ORDER_LEFT_LIST,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_ORDER_LEFT_LIST_FAIL,
            message: error
        })
    }
};