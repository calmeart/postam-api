const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  subject: String,
  body: String,
  username: String,
  usermail: String,
  date: Date,
  platformId: String
});

module.exports = mongoose.model('Message', messageSchema);
