'use strict';

function makeListTodos({ todosDb }) {
  return async function listTodos({}) {
    const todos = await todosDb.findAll({});
    return todos;
  };
}

module.exports = {
  makeListTodos,
};
