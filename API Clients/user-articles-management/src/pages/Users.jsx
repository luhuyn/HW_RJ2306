import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        throw error;
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </div>
      ))}
      <Link to="/user/add">
        <button type="button">Create</button>
      </Link>
    </div>
  );
}
export default Users;
