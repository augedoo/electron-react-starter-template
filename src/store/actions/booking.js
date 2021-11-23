import axios from 'axios';
import {
	CHECK_AVAILABILITY_SUCCESS,
	CHECK_AVAILABILITY_ERROR,
	CLEAR_ERRORS,
	CLEAR_MESSAGE,
} from './types';
import { API_URL } from '@/config/index';
import { setErrorResponse } from '@/utils/index';

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Check Availability of a listing
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const checkAvailability =
	(formValues, typeId) => async (dispatch, getState) => {
		getState().booking.bookingLoading = true;

		const values = {
			start_at: formValues.start_at,
			end_at: formValues.end_at,
			typeId,
		};

		try {
			const { data } = await axios.post(
				`${API_URL}/booking/checkAvailability`,
				values,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			dispatch({
				type: CHECK_AVAILABILITY_SUCCESS,
				payload: data.data,
			});

			setTimeout(() => {
				dispatch({
					type: CLEAR_MESSAGE,
				});
			}, 10000);
		} catch (err) {
			setErrorResponse(err, CHECK_AVAILABILITY_ERROR, dispatch);

			setTimeout(() => {
				dispatch({
					type: CLEAR_ERRORS,
				});
			}, 7500);
		}
	};

// >>>>>>>>>>>>
// Clear Error
// >>>>>>>>>>>>
export const clearErrors = () => async (dispatch, getState) => {
	dispatch({ type: CLEAR_ERRORS });
};
