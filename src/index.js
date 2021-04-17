'use strict';

const express = require('express');
const { makeExpressCallback } = require('./express-callback');
const { getTodos, getTodo, postTodo, notFound } = require('./controllers');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get('/todos', makeExpressCallback(getTodos));
app.post('/todos', makeExpressCallback(postTodo));
app.get('/todos/:id', makeExpressCallback(getTodo));
app.use(makeExpressCallback(notFound));

const port = 3000;
app.listen(port, () => {
  console.log(`Todo api app listening at http://localhost:${port}`);
});
