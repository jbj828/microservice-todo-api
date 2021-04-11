'use strict';

const mongoose = require('mongoose');

const url = process.env.TODOS_DB_URL;
const dbName = process.env.TODOS_DB_NAME;

async function makeDb() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(`${url}${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('==> MongoDB Connected!');
  });
  return db;
}

module.exports = {
  makeDb,
};
