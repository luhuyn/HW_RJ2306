import React from 'react';

import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; 
import User from './components/User';
import store from './redux/store';
const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <Provider store={store}>
    <User />
  </Provider>
);