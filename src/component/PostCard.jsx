import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body.substring(0, 150)}...</p>
      <div className="post-footer">
        <div className="author-info">
        </div>
        <div className="post-stats"> 
        </div>
      </div>
    </div>
  );
};

export default PostCard;

