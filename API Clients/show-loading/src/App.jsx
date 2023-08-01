import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const getUsers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .get("http://localhost:3001/api/users")
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      }, 3000); 
    });
  };

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
