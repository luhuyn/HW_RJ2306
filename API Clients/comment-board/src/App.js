import React, { useEffect, useState } from 'react';
import { getUsers, getComments, getPosts } from './api';

const App = () => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
    getComments().then((data) => setComments(data));
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h1>Comments:</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.content} (User ID: {comment.user_id})
          </li>
        ))}
      </ul>

      <h1>Posts:</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.content} (User ID: {post.user_id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
