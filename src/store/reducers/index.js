import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';

export default combineReducers({
	booking: bookingReducer,
});
