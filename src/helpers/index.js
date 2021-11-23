// Set error response for a request
export const setErrorResponse = (
	err,
	actionType,
	dispatch,
	alertType,
	additionalMessage = '',
	alertTimer = 3000
) => {
	if (err.response) {
		let res = err.response.data.message || err.response.data;

		// * 500 Errors
		if (err.response.status == 500) {
			return dispatch({
				type: actionType,
				payload: { error: err.response.statusText },
			});
		}

		dispatch({
			type: actionType,
			payload:
				typeof res === 'string'
					? JSON.parse(res)
					: JSON.parse(JSON.stringify(res)),
		});
	} else {
		dispatch({ type: actionType, payload: err.message });
		dispatch(setAlert('danger', err.message, additionalMessage, alertTimer));
	}
};
