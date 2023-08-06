// file: src/components/PostListPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions/postActions";
import { Typography, Paper, Button } from "@mui/material";
import "./PostListPage.css"; // Import the CSS file

const PostListPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <div className="post-title">
        <Typography variant="h4">Post</Typography>
        <Link to="/new">
          <Button variant="contained" color="primary" className="add-button">
            Add new Post
          </Button>
        </Link>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Paper elevation={3} className="post-container">
              <div className="post-content">
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Link to={`/edit/${post.id}`}>
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                </Link>
              </div>
              <Typography variant="body1">{post.body}</Typography>
            </Paper>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;
