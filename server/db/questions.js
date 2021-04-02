const { model, pluralize, Schema } = require('mongoose');

const questionSchema = new Schema({
  question: String,
  answer: String,
  score: Number,
});

module.exports = model('Question', questionSchema);
