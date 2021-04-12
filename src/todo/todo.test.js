'use strict';

const { makeFakeTodo } = require('../../__test__/fixtures/todo');
const { makeTodo } = require('./index');

describe('todo', () => {
  it('must have description', () => {
    // Act
    const todo = makeFakeTodo({ description: null });

    // Assert
    expect(() => makeTodo(todo)).toThrow('Todo must have description');
  });
  it('must have complete', () => {
    // Act
    const todo = makeFakeTodo({ complete: null });

    // Assert
    expect(() => makeTodo(todo)).toThrow('Todo must have complete');
  });
});
