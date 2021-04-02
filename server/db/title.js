const { model, Schema } = require('mongoose');

const titleSchema = new Schema({
  title: String,
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question',
  }],
});

module.exports = model('Title', titleSchema);
