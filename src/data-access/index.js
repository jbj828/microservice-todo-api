const mongoose = require('mongoose');

const url = process.env.TODOS_DB_URL;
const dbName = process.env.TODOS_DB_NAME;

mongoose.connect(`${url}${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('==> MongoDB Connected!');
});
