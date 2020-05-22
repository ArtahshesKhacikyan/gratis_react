import { combineReducers } from 'redux';
import LiveOrderReducer from '../components/LiveOrder/liveOrderstore/reducer';

const rootReducer = combineReducers({
    liveOrder: LiveOrderReducer
})

export default rootReducer;
