'use strict';

const { makeGetTodos } = require('./get-todos');

describe('get todos controller', () => {
  it('successfully get todos list', async () => {
    // Arrange
    const getTodos = await makeGetTodos({ listTodos: (c) => c });

    // Act
    const res = await getTodos();

    // Assert
    expect(res.statusCode).toEqual(200);
  });
  it('reports get todos errors', async () => {
    // Arrange
    const getTodos = await makeGetTodos({
      listTodos: () => {
        throw Error('bang!');
      },
    });

    // Act
    const res = await getTodos();

    // Assert
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual('hi error');
  });
});
