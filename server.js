'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');

app.get('/', (req, res) => {
  res.send('welcome to my server! :)');
});

app.get('/amjad', (req, res) => {
  throw new Error('Opps!, you got an error! :(');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
