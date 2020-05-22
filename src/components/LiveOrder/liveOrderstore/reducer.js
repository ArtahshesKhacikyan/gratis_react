import {
    GET_ORDER_LIST,
    GET_ORDER_LIST_FAIL,
    GET_ORDER_LEFT_LIST,
    GET_ORDER_LEFT_LIST_FAIL
} from './actionTypes';

const initialState = {
    getOrderListResponse: {},
    getOrderLeftListResponse: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ORDER_LIST:
            return {
                getOrderListResponse: action.payload,
            };
        case GET_ORDER_LIST_FAIL:
            return {
                ...state,
                errorMessage: action.message
            };
        case GET_ORDER_LEFT_LIST:
            return {
                getOrderLeftListResponse: action.payload,
            };
        case GET_ORDER_LEFT_LIST_FAIL:
            return {
                ...state,
                errorMessage: action.message
            };
        default:
            return state;
    }
}