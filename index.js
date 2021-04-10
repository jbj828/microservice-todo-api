'use strict';

const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.send('hi');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Todo api app listening at http://localhost:${port}`);
});
