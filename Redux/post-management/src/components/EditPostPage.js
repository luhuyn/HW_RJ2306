import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../actions/postActions";
import { useNavigate, useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";

const EditPostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.body);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { title, body: content };
    dispatch(updatePost(id, updatedPost));
    alert("Post updated successfully!");
    navigate("/");
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm">
      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          Edit Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            label="Content"
            variant="outlined"
            multiline
            rows={5}
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditPostPage;
