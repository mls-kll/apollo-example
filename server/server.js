const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const posts = [
  {
    userId: uuidv4(),
    id: 1,
    title: 'First post',
    body: 'This is the text of the first post'
  },
  {
    userId: uuidv4(),
    id: 2,
    title: 'Second post',
    body: 'This is the text of the second post'
  },
  {
    userId: uuidv4(),
    id: 3,
    title: 'Third post',
    body: 'This is the text of the third post'
  },
  {
    userId: uuidv4(),
    id: 4,
    title: 'Fourth post',
    body: 'This is the text of the fourth post'
  },
  {
    userId: uuidv4(),
    id: 5,
    title: 'Fifth post',
    body: 'This is the text of the fifth post'
  }
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
