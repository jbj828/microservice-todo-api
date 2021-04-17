'use strict';

const { makeGetTodo } = require('./get-todo');
const { makeFakeTodo } = require('../../__test__/fixtures/todo');

describe('controllers, get todo', () => {
  it('successfully get todo by id', async () => {
    // Arrange
    const todo = makeFakeTodo();
    const getTodo = makeGetTodo({
      listTodo: ({ id }) => {
        return { ...todo, _id: id };
      },
    });
    const id = 'testid1234';
    const request = {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        id: id,
      },
    };
    const expected = {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 200,
      body: {
        ...todo,
        _id: id,
      },
    };

    // Act
    const actual = await getTodo(request);

    // Assert
    expect(actual).toEqual(expected);
  });
});
