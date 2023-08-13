import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePostSuccess } from '../actions/actions';
import axios from 'axios';

const EditPostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const [post, setPost] = useState({
    title: '',
    body: '',
    author: '',
  });

  useEffect(() => {
    const postFromStore = posts.find((p) => p.id === parseInt(postId));
    if (postFromStore) {
      setPost(postFromStore);
    } else {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((response) => {
        setPost(response.data);
      });
    }
  }, [postId, posts]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSave = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${postId}`, post)
      .then((response) => {
        dispatch(updatePostSuccess(response.data));
        navigate(`/post/${postId}`);
      });
  };

  return (
    <div>
      <h2>Edit Post</h2>
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

export default EditPostPage;