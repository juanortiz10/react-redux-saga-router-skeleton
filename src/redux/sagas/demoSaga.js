import { put, call } from 'redux-saga/effects';
import { getDemo } from '../api';
import * as types from '../../consts/actionTypes';

export function* getDemoRequestSaga({ payload }) {
	try {
		const demoData = yield call(getDemo, payload);

		yield put({ type: types.GET_DEMO_SUCCESS, demoData });
	} catch (error) {
		yield put({ type: types.SEARCH_MEDIA_ERROR, error });
	}
}
