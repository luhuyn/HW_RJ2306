import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, showAlert } from '../redux/action';
import axios from 'axios';

function* getUsersSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    yield put({ type: ActionTypes.GET_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put(showAlert('Failed to get users.'));
  }
}

function* deleteUserSaga(action) {
  try {
    const id = action.payload;
    yield call(axios.delete, `https://jsonplaceholder.typicode.com/users/${id}`);
    yield put({ type: ActionTypes.DELETE_USER_SUCCESS, payload: id });
    yield put(showAlert('User deleted successfully.'));
  } catch (error) {
    yield put(showAlert('Failed to delete user.'));
  }
}

function* userSaga() {
  yield takeLatest(ActionTypes.GET_USERS, getUsersSaga);
  yield takeLatest(ActionTypes.DELETE_USER, deleteUserSaga);
}

export default userSaga;