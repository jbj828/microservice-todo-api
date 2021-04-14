'use strict';

const { makeAddTodo } = require('./add-todo');
const { makeDb, disconnect } = require('../../__test__/fixtures/db');
const { makeFakeTodo } = require('../../__test__/fixtures/todo');
const { makeTodosDb } = require('../data-access/todos-db');
const { Todo } = require('../data-access/schema');

describe('add todo', () => {
  afterAll(() => disconnect());

  it('insert todo', async () => {
    // Arrange
    const todosDb = await makeTodosDb({ makeDb, Todo });
    const addTodo = makeAddTodo({ todosDb });
    const todo = makeFakeTodo({
      description: 'test description',
      complete: true,
    });

    // Act
    const res = await addTodo({ todo });

    // Assert
    expect(res.description).toEqual('test description');
    expect(res.complete).toEqual(true);
  });
});
