import React from 'react';
import Post from './Post';
import { gql } from 'apollo-boost';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    this.props.client
      .query({
        query: gql`
          {
            posts {
              id
              title
              body
            }
          }
        `
      })
      .then(result => {
        this.setState({ posts: result.data.posts });
      });
  };

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
