// 1. jest-mongo의 in-memory-server를 connect, disconnect 하는 것을 가져온다
// 2. fixture에 makeDb를 만든다.
// 3. data-access - todos-db.js 를 가져온다
// 4. fixtures/todo.js 를 가져온다

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

async function connect() {
  const uri = await mongod.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function disconnect() {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
}

// async function makeDb() {
//     await mongoose.connect(`${url}${dbName}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     const db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', () => {
//       console.log('==> MongoDB Connected!');
//     });
//     return db;
//   }

async function makeDb() {
  await connect();
}

module.exports = {
  makeDb,
  disconnect,
};
