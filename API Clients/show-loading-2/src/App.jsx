import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return axios.get('http://localhost:3001/api/users');
  };

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>loading...</p>;
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
