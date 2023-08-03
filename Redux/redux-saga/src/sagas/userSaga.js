import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../actions/userActions';

const API_URL = 'https://example.com/mock-api'; 

function* login(action) {
  const { username, password } = action.payload;
  try {
    if (username === 'admin' && password === 'letmein') {
      yield put({ type: LOGIN_SUCCESS });
    } else {

    }
  } catch (error) {
    
  }
}

function* fetchUsers() {
  try {
    const response = yield axios.get(`${API_URL}/users`);
    yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default function* rootSaga() {
  yield all([watchLogin(), watchFetchUsers()]);
}