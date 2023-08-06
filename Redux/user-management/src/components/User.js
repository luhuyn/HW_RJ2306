import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, deleteUser } from '../redux/action';
import './User.css'; 

const User = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [showUserList, setShowUserList] = useState(false);

  const handleGetUsers = () => {
    dispatch(getUsers());
    setShowUserList(true);
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="user-container">
      <h1 className="user-title">User List</h1>
      <button className="user-button" onClick={handleGetUsers}>Get users</button>
      {showUserList && (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
