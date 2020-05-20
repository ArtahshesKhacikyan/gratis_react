import {
    GET_ORDER_LIST,
    GET_ORDER_LIST_FAIL
} from './actionTypes';

const INTIAL_STATE = {
    getOrderListRespose: ''
};

export default function (state = INTIAL_STATE, action) {
    switch (action.type) {
        case GET_ORDER_LIST:
            return {
                getOrderListRespose: action.payload,
            }
            case GET_ORDER_LIST_FAIL: {
                return {
                    ...state,
                    errorMessage: action.message
                }
            }
            default:
                return state;
    }
}