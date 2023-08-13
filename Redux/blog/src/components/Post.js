import React from 'react';
import ReactionButton from './ReactionButton';

const Post = ({ post, onReaction }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.body}</p>
        <p className="card-text">Author: {post.author}</p>
        <ReactionButton post={post} onReaction={onReaction} />
      </div>
    </div>
  );
};

export default Post;
