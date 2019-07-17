import React from 'react';
import Posts from './components/Posts';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <h1>Fake blog posts</h1>
      <Posts />
    </div>
  </ApolloProvider>
);

export default App;
