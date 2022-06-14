
const express = require('express');
const { middleWare } = require('./middleWares');
const { getHome } = require('./routes');

const app = express();

app.get('/tasks/:id/get', middleWare, getHome);

app.listen(5000, () => {
  console.log('Server started');
})