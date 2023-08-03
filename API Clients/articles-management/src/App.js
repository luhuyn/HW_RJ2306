import React, { useState } from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const showUserDetail = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      {selectedUserId ? (
        <UserDetail userId={selectedUserId} onCancel={() => showUserDetail(null)} />
      ) : (
        <UserList showUserDetail={showUserDetail} />
      )}
    </div>
  );
};

export default App;