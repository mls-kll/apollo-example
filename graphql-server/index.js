const { ApolloServer, gql } = require('apollo-server');
/* const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts';

let postList = null;

const getPosts = () => {
  try {
    return axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

getPosts().then(response => {
  postList = response.data;
});

setTimeout(() => {
  console.log(postList);
}, 3000); */

const posts = [
  {
    userId: 10,
    id: 96,
    title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi',
    body:
      'in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut'
  },
  {
    userId: 10,
    id: 97,
    title: 'quas fugiat ut perspiciatis vero provident',
    body:
      'eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam'
  },
  {
    userId: 10,
    id: 98,
    title: 'laboriosam dolor voluptates',
    body:
      'doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores'
  },
  {
    userId: 10,
    id: 99,
    title: 'temporibus sit alias delectus eligendi possimus magni',
    body:
      'quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia'
  },
  {
    userId: 10,
    id: 100,
    title: 'at nam consequatur ea labore ea harum',
    body:
      'cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut'
  }
];

const typeDefs = gql`
  type Post {
    userId: String
    id: String
    title: String
    body: String
  }

  type Query {
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    posts: () => posts
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
