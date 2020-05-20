// import { reduxStore } from '../../../reduxStore';
import {
    GET_ORDER_LIST,
    GET_ORDER_LIST_FAIL
} from './actionTypes';
import constants from '../../../resources/constants';
import {
    tokenizedApiCaller,
} from '../../../clients/tokenizedApiCaller';

export function getOrderList() {
    return function (dispatch) {
        tokenizedApiCaller.post(constants.api + 'orders/list')
            .then(function (response) {
                dispatch({
                    type: GET_ORDER_LIST,
                    payload: response.data
                })
            }).catch(function (error) {
                dispatch({
                    type: GET_ORDER_LIST_FAIL,
                    message: error
                })
            });
    }
}