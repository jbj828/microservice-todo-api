'use strict';

function makeListTodo({ todosDb }) {
  return async function listTodo({ id }) {
    return await todosDb.findById({ id });
  };
}

module.exports = {
  makeListTodo,
};
