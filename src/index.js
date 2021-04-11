'use strict';

const express = require('express');
const dotenv = require('dotenv');
const makeCallback = require('./express-callback');

const app = express();
dotenv.config();

app.get(`${process.env.API_URL_PREFIX}/todos`, makeCallback());
app.post(`${process.env.API_URL_PREFIX}/todos`, makeCallback());
app.patch(`${process.env.API_URL_PREFIX}/todos/:id`, makeCallback());
app.get(`${process.env.API_URL_PREFIX}/todos/:id`, makeCallback());
app.delete(`${process.env.API_URL_PREFIX}/todos/:id`, makeCallback());

const port = 3000;
app.listen(port, () => {
  console.log(`Todo api app listening at http://localhost:${port}`);
});
