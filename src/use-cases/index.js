'use strict';

const { makeAddTodo } = require('./add-todo');
const { makeGetTodo } = require('./get-todo');
const { makeListTodos } = require('./list-todos');

const { todosDb } = require('../data-access/index');

const addTodo = makeAddTodo({ todosDb });
const getTodo = makeGetTodo({ todosDb });
const listTodos = makeListTodos({ todosDb });

const todoService = Object.freeze({
  addTodo,
  getTodo,
  listTodos,
});

module.exports = {
  todoService,
  addTodo,
  getTodo,
  listTodos,
};
