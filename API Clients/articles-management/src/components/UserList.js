import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ showUserDetail }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-users/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-users/users/${userId}`);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <button onClick={() => showUserDetail(null)}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>Name: {user.name}</span>
            <button onClick={() => showUserDetail(user.id)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;