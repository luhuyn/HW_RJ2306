// file: src/actions/postActions.js
import axios from "axios";
import { FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS, UPDATE_POST_SUCCESS } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(BASE_URL);
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const response = await axios.post(BASE_URL, post);
    dispatch({ type: ADD_POST_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, post);
    dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error updating post:", error);
  }
};
