'use strict';

const express = require('express');
const dotenv = require('dotenv');
const { makeExpressCallback } = require('./express-callback');
const { getTodos } = require('./controllers');

const app = express();
dotenv.config();

app.get('/todos', makeExpressCallback(getTodos));
app.post('/todos', makeExpressCallback());
app.patch('/todos/:id', makeExpressCallback());
app.get('/todos/:id', makeExpressCallback());
app.delete('/todos/:id', makeExpressCallback());

const port = 3000;
app.listen(port, () => {
  console.log(`Todo api app listening at http://localhost:${port}`);
});
