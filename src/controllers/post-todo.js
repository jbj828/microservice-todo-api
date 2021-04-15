'use strict';

function makePostTodo({ addTodo }) {
  return async function postTodo(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    const todo = httpRequest.body;
    try {
      const res = await addTodo({ todo });
      return {
        headers,
        statusCode: 200,
        body: res,
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
  makePostTodo,
};
