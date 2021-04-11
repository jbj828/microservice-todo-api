'use strict';

const { makeListTodos } = require('./list-todos');
const { todosDb } = require('../data-access/index');

const listTodos = makeListTodos({ todosDb });

const todoService = Object.freeze({
  listTodos,
});

module.exports = {
  todoService,
  listTodos,
};
