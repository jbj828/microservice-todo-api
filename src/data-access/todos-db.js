'use strict';

function makeTodosDb({ makeDb, Todo }) {
  return Object.freeze({ findAll });

  async function findAll({}) {
    await makeDb();
    const todos = await Todo.find();
    return { todos };
  }
}

module.exports = {
  makeTodosDb,
};
