const express = require('express');
const router = express.Router({mergeParams: true});
const Platform = require('../models/platform-model');
const Message = require('../models/message-model');
const messagesArray = require('../middleware/messages-array');

router.route('/')
.get(messagesArray, (req, res) => {
  res.render('platforms', {messagesArray: req.messagesArray});
}).post(async (req, res) => {
  const tempPlatform = new Platform({
    platform: req.body.platformName,
    redirectAddress: req.body.redirectAddress,
    userId: req.params.userId
  });
  await tempPlatform.save();
  res.redirect(`/${req.params.userId}/platforms`);
});

module.exports = router
