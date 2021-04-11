'use strict';

function buildMakeTodo({}) {
  return function makeTodo({ description, complete }) {
    if (!description) {
      throw new Error('Todo must have description');
    }
    if (!complete) {
      throw new Error('Todo must have complete');
    }

    return Object.freeze({
      getDescription: () => description,
      getComplete: () => complete,
    });
  };
}

module.exports = {
  buildMakeTodo,
};
