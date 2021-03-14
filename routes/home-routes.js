const express = require('express');
const router = express.Router();
const platformRouter = require('./platform-routes');

router.use('/:userId/platforms', platformRouter)

router.route('/')
.get((req, res) => {
  res.render('home')
})
.post((req, res) => {
  if (req.body.homeScript == process.env.MY_SECRET) {
    res.redirect(`${process.env.MY_SECRET}/platforms`)
  };
});

module.exports = router;
