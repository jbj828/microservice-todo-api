'use strict';

const { makeFakeTodo } = require('../../__test__/fixtures/todo');
const { makeTodo } = require('./index');

describe('todo', () => {
  it('must have description', () => {
    const todo = makeFakeTodo({ description: null });
    expect(() => makeTodo(todo)).toThrow('Todo must have description');
  });
  it('must have complete', () => {
    const todo = makeFakeTodo({ complete: null });
    expect(() => makeTodo(todo)).toThrow('Todo must have complete');
  });
});
