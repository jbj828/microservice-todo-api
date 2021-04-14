'use strict';

function makeAddTodo({ todosDb }) {
  return async function addTodo({ todo }) {
    return await todosDb.insert({ todo });
  };
}

module.exports = {
  makeAddTodo,
};
