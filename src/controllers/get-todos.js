function makeGetTodos({ listTodos }) {
  return async function getTodos(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const todos = await listTodos({});
      return {
        headers,
        statusCode: 200,
        body: todos,
      };
    } catch (error) {
      console.error(error);
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
  makeGetTodos,
};
