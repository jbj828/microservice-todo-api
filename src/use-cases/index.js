'use strict';

const { makeAddTodo } = require('./add-todo');
const { makeListTodo } = require('./list-todo');
const { makeListTodos } = require('./list-todos');

const { todosDb } = require('../data-access/index');

const addTodo = makeAddTodo({ todosDb });
const listTodo = makeListTodo({ todosDb });
const listTodos = makeListTodos({ todosDb });

const todoService = Object.freeze({
  addTodo,
  listTodo,
  listTodos,
});

module.exports = {
  todoService,
  addTodo,
  listTodo,
  listTodos,
};
