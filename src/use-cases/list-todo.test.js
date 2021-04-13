'use strict';

const { makeDb, disconnect } = require('../../__test__/fixtures/db');
const { makeListTodos } = require('./list-todos');
const { makeTodosDb } = require('../data-access/todos-db');
const { Todo } = require('../data-access/schema');

describe('list todos', () => {
  afterAll(async () => disconnect());

  it('get all todos', async () => {
    // Arrange
    const todosDb = await makeTodosDb({ makeDb, Todo });
    const listTodos = await makeListTodos({ todosDb });

    // Act
    const res = await listTodos({});
    console.log(res);

    // Assert
    expect(res.todos).toEqual([]);

    // Start from here!
    // 1. jest의 global setup, global teardown을 공부하고, 그 내용에 맞게 설정을 하자.
  });
});
