const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema({
  platform: String,
  redirectAddress: String,
  userId: String
});

module.exports = mongoose.model('Platform', platformSchema);
