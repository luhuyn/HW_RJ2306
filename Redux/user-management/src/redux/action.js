export const ActionTypes = {
    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    DELETE_USER: 'DELETE_USER',
    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    SHOW_ALERT: 'SHOW_ALERT',
  };
  
  export const getUsers = () => ({
    type: ActionTypes.GET_USERS,
  });
  
  export const deleteUser = (id) => ({
    type: ActionTypes.DELETE_USER,
    payload: id,
  });
  
  export const showAlert = (message) => ({
    type: ActionTypes.SHOW_ALERT,
    payload: message,
  });