import { ActionTypes } from './action';

const initialState = {
  users: [],
  alertMessage: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case ActionTypes.DELETE_USER_SUCCESS:
      return { ...state, users: state.users.filter((user) => user.id !== action.payload) };
    case ActionTypes.SHOW_ALERT:
      return { ...state, alertMessage: action.payload };
    default:
      return state;
  }
};

export default userReducer;