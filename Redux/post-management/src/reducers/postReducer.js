import { FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS, UPDATE_POST_SUCCESS } from "../actions/types";

const initialState = {
  posts: [], 
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload }; 
    case ADD_POST_SUCCESS:
      return { ...state, posts: [...state.posts, action.payload] }; 
    case UPDATE_POST_SUCCESS:
      const updatedPosts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      return { ...state, posts: updatedPosts };
    default:
      return state;
  }
};

export default postReducer;
