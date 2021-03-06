const express = require('express');
const router = express.Router({mergeParams: true});
const Platform = require('../models/platform-model');
const Message = require('../models/message-model');

router.route('/')
.get(async (req, res) => {
  const foundMessages = await Message.find({}).sort({date: 'desc'});
  res.render('messages', {foundMessages});
})
.post(async (req, res) => {
  console.log(req.params);
  const {subject, body, username, usermail} = req.body
  const tempMessage = new Message({
    subject,
    body,
    username,
    usermail,
    date: new Date()
  })
  await tempMessage.save();
  res.redirect(`${req.params.userId}/messages`)
  // This redirect address must be the redirect of that persons site
});

module.exports = router
