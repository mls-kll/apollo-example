import React from 'react';
import Post from './Post';

const Posts = ({ posts }) => {
  return (
    <div className='post-container'>
      {posts.map(post => (
        <Post title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Posts;
