'use strict';

const { makeDb, disconnect } = require('../../__test__/fixtures/db');
const { makeFakeTodo } = require('../../__test__/fixtures/todo');
const { makeListTodo } = require('./list-todo');
const { makeTodosDb } = require('../data-access/todos-db');
const { Todo } = require('../data-access/schema');

describe('use-cases, get todo', () => {
  afterAll(() => disconnect());

  it('get todo', async () => {
    // Arrange
    const todosDb = makeTodosDb({ makeDb, Todo });
    const listTodo = makeListTodo({ todosDb });
    const todo = makeFakeTodo({
      description: 'this is test',
      complete: false,
    });

    const fakeTodoInfo = await todosDb.insert({ todo });
    const id = fakeTodoInfo._id;

    // Act
    const res = await listTodo({ id });

    // Assert
    expect(res.description).toEqual('this is test');
    expect(res.complete).toEqual(false);
  });
});
