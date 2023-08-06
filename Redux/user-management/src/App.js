import React from 'react';
import { Provider } from 'react-redux';
import User from './components/User';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>User List</h1>
        <User />
      </div>
    </Provider>
  );
};

export default App;
