import React from 'react';
import Posts from './components/Posts';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data =>
        this.setState({
          posts: data
        })
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Read posts in fake latin</h1>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
