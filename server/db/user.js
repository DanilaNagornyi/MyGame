const { model, pluralize, Schema } = require('mongoose');

pluralize(null);

const userSchema = new Schema({
  email: String,
  password: String,
});

module.exports = model('User', userSchema);
