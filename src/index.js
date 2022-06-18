
const express = require('express');
const { clientErrorHandler } = require('./middleWares/error.handler');
const router = require('./routes');

const app = express();

app.use('/', router);

app.use(clientErrorHandler)

app.listen(5000, () => {
  console.log('Server started');
})