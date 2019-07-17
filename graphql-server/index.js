const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');

const typeDefs = gql`
  type Post {
    userId: String
    id: Int
    title: String
    body: String
  }

  type Query {
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    posts: async () => {
      let response = await axios.get(
        'http://localhost:8080/posts'
      );
      return response.data;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
