export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const REACT_TO_POST = 'REACT_TO_POST'; 
export const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  payload: post,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const updatePostSuccess = (post) => ({
  type: UPDATE_POST_SUCCESS,
  payload: post,
});

export const reactToPost = (postId, reactionType) => ({
  type: REACT_TO_POST,
  payload: {
    postId,
    reactionType,
  },
});