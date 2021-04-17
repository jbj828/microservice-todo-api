'use strict';

const { makeFakeTodo } = require('../../__test__/fixtures/todo');
const { makePostTodo } = require('./post-todo');

describe('controllers, post-todo', () => {
  it('successfully post new todo', async () => {
    // Arrange
    const _id = 'testid1234';
    const todo = makeFakeTodo();

    const postTodo = makePostTodo({
      addTodo: ({ todo }) => {
        return {
          ...todo,
          _id,
        };
      },
    });
    const request = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: todo,
    };
    const expected = {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 200,
      body: {
        ...todo,
        _id,
      },
    };

    // Act
    const actual = await postTodo(request);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('reports post todo error', async () => {
    // Arrange
    const todo = makeFakeTodo();
    const postTodo = makePostTodo({
      addTodo: () => {
        throw Error('bang!');
      },
    });

    const request = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: todo,
    };
    const expected = {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 400,
      body: {
        error: 'bang!',
      },
    };

    // Act
    const actual = await postTodo(request);

    // Assert
    expect(actual).toEqual(expected);
  });
});
