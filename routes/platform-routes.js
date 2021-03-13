const express = require('express');
const router = express.Router({mergeParams: true});
const Platform = require('../models/platform-model');
const Message = require('../models/message-model');

router.route('/')
.get(async (req, res) => {
  const foundPlatforms = await Platform.find({});
  res.render('platforms', {foundPlatforms});
}).post(async (req, res) => {
  console.log(req.params);
  const tempPlatform = new Platform({
    platform: req.body.platformName,
    redirectAddress: req.body.redirectAddress,
    userId: req.params.userId
  });
  await tempPlatform.save();
  res.redirect(`/${req.params.userId}/platforms`);
});

module.exports = router
