import React from 'react';
import Alert from './components/alert';

const App = () => {
  return (
    <div>
      <Alert text="Warning! The resource you just accessed does not exist." />
    </div>
  );
};

export default App;
