import {
	CHECK_AVAILABILITY_SUCCESS,
	CHECK_AVAILABILITY_ERROR,
	CLEAR_ERRORS,
	CLEAR_MESSAGE,
} from '../actions/types';

const initialState = {
	bookingLoading: false,
	bookingMessage: null,
	bookingError: null,
};

const bookingReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHECK_AVAILABILITY_SUCCESS:
			return {
				...state,
				bookingLoading: false,
				bookingMessage: payload.message,
			};

		case CHECK_AVAILABILITY_ERROR:
			return {
				...state,
				bookingLoading: false,
				bookingError: payload,
			};

		case CLEAR_MESSAGE:
			return {
				...state,
				bookingMessage: null,
				bookingLoading: false,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				bookingError: null,
				bookingLoading: false,
			};

		default:
			return state;
	}
};

export default bookingReducer;
