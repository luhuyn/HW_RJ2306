import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const PostDetailPage = () => {
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const [post, setPost] = useState(null);

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

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetailPage;