'use strict';

const faker = require('faker');

function makeFakeTodo(overrides) {
  const todo = {
    description: faker.name.jobDescriptor(),
    complete: false,
  };
  return {
    ...todo,
    ...overrides,
  };
}

module.exports = {
  makeFakeTodo,
};
