'use strict';

function makeAddTodo({ todosDb }) {
  return async function addTodo({ todo }) {
    await todosDb.insert({ todo });
    return;
  };
}

module.exports = {
  makeAddTodo,
};
