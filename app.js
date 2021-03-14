require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home-routes');
const messageRouter = require('./routes/message-routes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

require('./models/connection.js')();

app.use('/', homeRouter);
app.use('/messages', messageRouter)







app.listen(process.env.PORT, function() {
  console.log('Server is working on port: ' + process.env.PORT);
});
