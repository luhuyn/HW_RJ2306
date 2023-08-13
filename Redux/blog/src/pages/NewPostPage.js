import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPostSuccess } from '../actions/actions';
import axios from 'axios';

const NewPostPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    title: '',
    body: '',
    author: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSave = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', post).then((response) => {
      dispatch(addPostSuccess(response.data));
      navigate('/');
    });
  };

  return (
    <div>
      <h2>New Post</h2>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={post.title} onChange={handleInputChange} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" name="author" value={post.author} onChange={handleInputChange} />
      </div>
      <div>
        <label>Content:</label>
        <textarea name="body" value={post.body} onChange={handleInputChange} />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NewPostPage;