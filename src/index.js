
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Hello');
  res.send({test: "test"});
});

app.listen(5000, () => {
  console.log('Server started');
})