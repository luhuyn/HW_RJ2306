import { ADD_POST_SUCCESS, UPDATE_POST_SUCCESS, REACT_TO_POST } from '../actions/actions';

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case UPDATE_POST_SUCCESS:
      const updatedPosts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      return {
        ...state,
        posts: updatedPosts,
      };
    case REACT_TO_POST:
      const { postId, reactionType } = action.payload;
      const reactedPosts = state.posts.map((post) =>
        post.id === postId ? { ...post, [reactionType]: post[reactionType] + 1 } : post
      );
      return {
        ...state,
        posts: reactedPosts,
      };
    default:
      return state;
  }
};

export default postReducer;