'use strict';

const { makeGetTodos } = require('./get-todos');

describe('get todos controller', () => {
  it('successfully get todos list', async () => {
    const getTodos = await makeGetTodos({ listTodos: (c) => c });
    const res = await getTodos();
    expect(res.statusCode).toEqual(200);
  });
  it('reports get todos errors', async () => {
    const getTodos = await makeGetTodos({
      listTodos: () => {
        throw Error('hi error');
      },
    });
    const res = await getTodos();
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual('hi error');
  });
});
