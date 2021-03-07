import { usersError, usersSuccess } from './actions';
import { UserActionTypes } from './types';
import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { Action } from 'redux';

type SagaAction<T> = Action & { payload: T };

function* users({ payload: params }: SagaAction<{ page: number }>) {
  try {
    const res = yield call(Api.getUsers,params);
    if (res.error) {
      yield put(usersError(res.error));
    } else {
      yield put(usersSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(usersError(err));
    } else {
      yield put(usersError(unknownError("An unknown error occurred")));
    }
  }
}


function* watchFetchRequest() {
  yield takeLatest(UserActionTypes.USERS_REQUEST, users);
}

export function* usersSaga() {
  yield all([fork(watchFetchRequest)]);
}
