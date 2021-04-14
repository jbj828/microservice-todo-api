'use strict';

const { makeAddTodo } = require('../use-cases/add-todo');
const { makeDb, disconnect } = require('../../__test__/fixtures/db');
const { makeFakeTodo } = require('../../__test__/fixtures/todo');
const { makeListTodos } = require('./list-todos');
const { makeTodosDb } = require('../data-access/todos-db');
const { Todo } = require('../data-access/schema');

describe('list todos', () => {
  afterAll(async () => disconnect());

  it('get all todos', async () => {
    // Arrange
    const todosDb = await makeTodosDb({ makeDb, Todo });
    const listTodos = await makeListTodos({ todosDb });
    const addTodo = await makeAddTodo({ todosDb });

    for (let i = 0; i < 3; i++) {
      const fakeTodo = makeFakeTodo();
      await addTodo({ fakeTodo });
    }

    // Act
    const res = await listTodos({});
    console.log(res);

    // Assert
    expect(res.todos.length).toEqual(3);
  });
});
