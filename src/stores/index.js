import { combineReducers } from 'redux';
import LiveOrderReducer from '../components/LiveOrder/liveOrderstore/reducer';
import PhotoConrtrolReducer from '../components/PhotoControl/photoControlStore/reducer';

const rootReducer = combineReducers({
    liveOrder: LiveOrderReducer,
    photoControl: PhotoConrtrolReducer
})

export default rootReducer;
