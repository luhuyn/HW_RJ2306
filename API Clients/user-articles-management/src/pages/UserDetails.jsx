import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDetails = () => {
  const { userId } = useParams();
  const isCreate = !userId;
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:3001/api/users/${userId}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error(error); // Log the error to the console
        });
    }
  }, [userId]);

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (isCreate) {
      axios
        .post('http://localhost:3001/api/users', user)
        .then(response => {
          alert(`Create user ${JSON.stringify(response.data)} successfully!!!`);
          navigate('/');
        })
        .catch(error => {
          console.error(error); // Log the error to the console for debugging
          alert('Error creating user. Please try again later.');
        });
    } else {
      axios
        .put(`http://localhost:3001/api/users/${userId}`, user)
        .then(response => {
          alert(`Edit user ${JSON.stringify(response.data)} successfully!!!`);
        })
        .catch(error => {
          console.error(error); // Log the error to the console for debugging
          alert('Error updating user. Please try again later.');
        });
    }
  };
  
  return (
    <div>
      <h1>User details</h1>
      <form>
        <div>
          <label>Id</label>
          <input name="id" value={user.id || ''} onChange={handleChange} readOnly={!isCreate} />
        </div>
        <div>
          <label>Name</label>
          <input name="name" value={user.name || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Birthday</label>
          <input type="date" name="birthday" value={user.birthday || ''} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserDetails;
