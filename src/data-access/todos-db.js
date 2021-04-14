'use strict';

function makeTodosDb({ makeDb, Todo }) {
  return Object.freeze({ findAll, insert, findById });

  async function findAll() {
    await makeDb();
    const todos = await Todo.find({});
    return { todos };
  }

  async function insert({ todo }) {
    await makeDb();
    return await Todo.create({ ...todo });
  }

  async function findById({ id }) {
    await makeDb();
    return await Todo.findById(id);
  }
}

module.exports = {
  makeTodosDb,
};
