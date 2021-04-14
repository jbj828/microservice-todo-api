'use strict';

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
    const listTodos = makeListTodos({ todosDb });

    const firstFakeTodo = makeFakeTodo();
    const SecondFakeTodo = makeFakeTodo();
    const thirdFakeTodo = makeFakeTodo();

    const fakeTodos = [firstFakeTodo, SecondFakeTodo, thirdFakeTodo];
    await Promise.all(
      fakeTodos.map(async (todo) => {
        await todosDb.insert({ todo });
      })
    );

    // Act
    const res = await listTodos();

    // Assert
    expect(res.todos.length).toEqual(3);
    expect(res.todos[0]).toHaveProperty('description');
    expect(res.todos[0]).toHaveProperty('complete');
  });
});
