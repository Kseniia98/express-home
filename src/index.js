
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Hello');
  res.end()
});

app.listen(5000)