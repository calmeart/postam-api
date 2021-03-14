const express = require('express');
const router = express.Router({mergeParams: true});
const Platform = require('../models/platform-model');
const Message = require('../models/message-model');

router.route('/')
.get(async (req, res) => {
  // const foundMessages = await Message.find({}).sort({date: 'desc'});
  // res.render('messages', {foundMessages});
  res.redirect('/');
})
.post(async (req, res) => {
  console.log(req.body);
  var host = req.get('host');
  var origin = req.get('origin');
  const {subject, body, senderName, senderMail, platformId} = req.body
  const tempMessage = new Message({
    subject,
    body,
    senderName,
    senderMail,
    date: new Date(),
    platformId,
    userId: host + " || " + origin
  })
  await tempMessage.save((err, doc) => {
    if (err) return res.send(err);
    res.send(doc);
  });

  // res.redirect(`${req.params.userId}/messages`)
  // This redirect address must be the redirect of that persons site
});

module.exports = router
