'use strict';

const dotenv = require('dotenv');
const { makeTodosDb } = require('./todos-db');
const mongoose = require('mongoose');
const { Todo } = require('./schema');
dotenv.config();

const url = process.env.TODOS_DB_URL;
const dbName = process.env.TODOS_DB_NAME;

async function makeDb() {
  await mongoose.connect(`${url}${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('==> MongoDB Connected!');
  });
  return db;
}

const todosDb = makeTodosDb({ makeDb, Todo });

module.exports = {
  todosDb,
};
