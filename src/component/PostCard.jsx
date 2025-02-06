import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body.substring(0, 150)}...</p>
      <div className="tags">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">#{tag}</span>
        ))}
      </div>
      <div className="post-footer">
        <div className="author-info">
          <img 
            src={post.author.profilePicture} 
            alt={post.author.name} 
            className="author-avatar"
          />
          <span className="author-name">{post.author.name}</span>
        </div>
        <div className="post-stats">
          <span> {post.views}</span>
          <span> {post.reactions.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
