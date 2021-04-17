'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    description: String,
    complete: Boolean,
  },
  {
    versionKey: false,
  }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
  Todo,
};
