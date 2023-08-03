import { LOGIN_SUCCESS, FETCH_USERS_SUCCESS } from '../actions/userActions';

const initialState = {
  loggedIn: false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;