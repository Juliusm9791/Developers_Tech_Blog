const router = require('express').Router();
const { User, Post } = require('../models');


// GET all info for homepage
router.get('/', async (req, res) => {
  try {
    const userData = await Post.findAll({
      include: [{ model: User }],
    });

    const allInfo = userData.map((user) => user.get({ plain: true }));
    res.render('homepage', { allInfo, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // console.log(res.body)
  res.render('login');
});

module.exports = router;
