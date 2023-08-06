import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/postActions";
import { useNavigate } from "react-router-dom";
import { Typography, Container, TextField, Button, Box } from "@mui/material";

const NewPostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, body: content };
    dispatch(addPost(newPost));
    alert("Post created successfully!");
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          New Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              margin="normal"
            />
          </div>
          <div>
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
          </div>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default NewPostPage;
