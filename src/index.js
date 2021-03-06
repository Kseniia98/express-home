
const express = require('express');
const { clientErrorHandler, serverErrorHandler } = require('./middleWares/error.handler');
const router = require('./routes');

const app = express();

app.use(express.json())

app.use(function (req, res, next) {
  console.log(new Date().toLocaleString(), req.method, req.path, req.body);
  next();
})

app.use('/', router);

app.use(clientErrorHandler);
app.use(serverErrorHandler);

app.listen(5000, () => {
  console.log('Server started');
})