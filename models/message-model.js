const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  subject: String,
  body: String,
  senderName: String,
  senderMail: String,
  date: Date,
  platformId: String,
  userId: String
});

module.exports = mongoose.model('Message', messageSchema);
