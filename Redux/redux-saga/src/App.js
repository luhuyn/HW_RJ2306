import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;