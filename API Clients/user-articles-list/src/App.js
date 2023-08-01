import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = axios.get('http://localhost:3001/api/users');
    const getArticles = axios.get('http://localhost:3001/api/articles');

    axios
      .all([getUsers, getArticles])
      .then(
        axios.spread((usersResponse, articlesResponse) => {
          const usersData = usersResponse.data;
          const articlesData = articlesResponse.data;

          const usersWithArticles = usersData.map((user) => {
            const userArticles = articlesData.filter(
              (article) => article.user_id === user.id
            );
            return {
              ...user,
              articleCount: userArticles.length,
            };
          });

          setUsers(usersWithArticles);
        })
      )
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Article numbers</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.articleCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
