import React from 'react';
import Post from './Post';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const Posts = ({ posts }) => (
  <Query
    query={gql`
      {
        posts {
          id
          title
          body
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;
      return data.posts.map(({ id, title, body }) => (
        <Post key={id} title={title} body={body} />
      ));
    }}
  </Query>
);

export default Posts;
