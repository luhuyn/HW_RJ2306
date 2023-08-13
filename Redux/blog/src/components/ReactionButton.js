import React from 'react';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionButton = ({ post, onReaction }) => {
  const handleReactionClick = (reactionType) => {
    onReaction(post.id, reactionType);
  };

  return (
    <div>
      {Object.entries(reactionEmoji).map(([reactionType, emoji]) => (
        <button key={reactionType} onClick={() => handleReactionClick(reactionType)}>
          {emoji} {post[reactionType]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButton;