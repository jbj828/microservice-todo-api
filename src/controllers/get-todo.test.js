'use strict';

const { listTodo } = require('../use-cases');
const { makeGetTodo } = require('./get-todo');
const { makeFakeTodo } = require('../../__test__/fixtures/todo');
const { makePostTodo } = require('./post-todo');
const { addTodo } = require('../use-cases');

describe('controllers, get todo', () => {
  afterAll(async () => {
    // delete todo api
  });

  it('successfully get todo by id', async () => {
    // Arrange
    const todo = makeFakeTodo();
    const postHttpRequest = {
      body: {
        ...todo,
      },
    };

    const postTodo = makePostTodo({ addTodo });
    const postRes = await postTodo(postHttpRequest);
    console.log(postRes);

    const getTodo = makeGetTodo({ listTodo });
    const httpRequest = {
      params: {
        id: postRes._id,
      },
    };

    // Act
    const res = await getTodo(httpRequest);
    console.log(res);

    // Assert
    expect(res.statusCode).toEqual(200);
  });
});
