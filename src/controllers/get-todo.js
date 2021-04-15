'use strict';

function makeGetTodo({ listTodo }) {
  return async function getTodo(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { id } = httpRequest.params;

    try {
      const todo = await listTodo({ id });
      return {
        headers,
        statusCode: 200,
        body: todo,
      };
    } catch (error) {
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message,
        },
      };
    }
  };
}

module.exports = {
  makeGetTodo,
};
