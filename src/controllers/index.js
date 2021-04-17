'use strict';

const { addTodo } = require('../use-cases');
const { listTodos } = require('../use-cases');
const { listTodo } = require('../use-cases');
const { notFound } = require('./not-found');
const { makeGetTodos } = require('./get-todos');
const { makeGetTodo } = require('./get-todo');
const { makePostTodo } = require('./post-todo');

const getTodos = makeGetTodos({ listTodos });
const getTodo = makeGetTodo({ listTodo });
const postTodo = makePostTodo({ addTodo });

const todosController = Object.freeze({
  getTodos,
  getTodo,
  postTodo,
  notFound,
});

module.exports = {
  todosController,
  getTodos,
  getTodo,
  postTodo,
  notFound,
};
