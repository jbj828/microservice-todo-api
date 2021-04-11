'use strict';

const { buildMakeTodo } = require('./todo');

const makeTodo = buildMakeTodo({});

module.exports = {
  makeTodo,
};
