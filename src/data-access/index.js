'use strict';

const config = require('../config');
const { makeTodosDb } = require('./todos-db');
const mongoose = require('mongoose');
const { Todo } = require('./schema');

const url = config.db.url;
const dbName = config.db.name;

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
