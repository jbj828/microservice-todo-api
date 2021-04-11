'use strict';

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  db: {
    url: process.env.TODOS_DB_URL,
    name: process.env.TODOS_DB_NAME,
  },
};
