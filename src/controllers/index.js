'use strict';

const { listTodos } = require('../use-cases');
const { makeGetTodos } = require('./get-todos');

const getTodos = makeGetTodos({ listTodos });

const todosController = Object.freeze({
  getTodos,
});

module.exports = {
  todosController,
  getTodos,
};
