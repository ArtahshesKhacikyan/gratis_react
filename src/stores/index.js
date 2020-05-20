import { combineReducers } from 'redux';
import LiveOrderReducer from '../components/LiveOrder/stores/reducer';

const rootReducer = combineReducers({
    order: LiveOrderReducer
})

export default rootReducer;
