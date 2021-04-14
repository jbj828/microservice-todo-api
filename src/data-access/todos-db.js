'use strict';

function makeTodosDb({ makeDb, Todo }) {
  return Object.freeze({ findAll, insert });

  async function findAll({}) {
    await makeDb();
    const todos = await Todo.find();
    return { todos };
  }

  async function insert({ todo }) {
    await makeDb();

    // 여기서부터 create 가 맞나? create 는 document를 추가하는 메서드라고함
    await Todo.create({ todo });
  }
}

module.exports = {
  makeTodosDb,
};
