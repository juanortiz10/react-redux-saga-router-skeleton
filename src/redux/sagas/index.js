import { all } from 'redux-saga/effects';
import watchDemo from './watcher';

export default function* rootSaga() {
	yield all([watchDemo()]);
}
