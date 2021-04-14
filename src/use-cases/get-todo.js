'use strict';

function makeGetTodo({ todosDb }) {
  return async function getTodo({ id }) {
    return await todosDb.findById({ id });
  };
}

module.exports = {
  makeGetTodo,
};
