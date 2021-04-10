const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  description: String,
  complete: Boolean,
});
