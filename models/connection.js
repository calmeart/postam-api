const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Database connection is established.");
    }
  });
}
