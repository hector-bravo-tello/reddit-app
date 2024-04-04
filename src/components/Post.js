import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.thumbnail && post.thumbnail !== 'self' && post.thumbnail !== 'default' && (
        <img src={post.thumbnail} alt={post.title} className="post-image" />
      )}
      <h3>{post.title}</h3>
      <p>Author: {post.author}</p>
      <p>Subreddit: {post.subreddit}</p>
      <p>Score: {post.score}</p>
      <p>Comments: {post.num_comments}</p>
      <Link to={`/post/${post.subreddit}/${post.id}`} className="button">
        View Details
      </Link>
    </div>
  );
};

export default Post;