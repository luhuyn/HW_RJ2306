import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchPostsSuccess, reactToPost } from '../actions/actions'; 
import axios from 'axios';
import Post from '../components/Post';

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      dispatch(fetchPostsSuccess(response.data));
    });
  }, [dispatch]);

  const handleReaction = (postId, reactionType) => {
    dispatch(reactToPost(postId, reactionType)); 
  };
  const sortedPosts = posts.slice().sort((a, b) => b.id - a.id);

  return (
    <div>
      <h1>Home Page</h1>
      {sortedPosts.map((post) => (
        <Post key={post.id} post={post} onReaction={handleReaction} />
      ))}
    </div>
  );
};

export default HomePage;
