import * as types from '../../consts/actionTypes';

export const getDemoRequest = payload => ({
	type: types.GET_DEMO_REQUEST,
	payload
});
