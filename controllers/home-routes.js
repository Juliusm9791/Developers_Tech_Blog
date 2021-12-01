const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


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

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const allInfo = userData.get({ plain: true });
    res.render('dashboard', {
     ...allInfo,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User },],
    });

    const allInfo = postData.get({ plain: true });
    res.render('updatepost', { allInfo, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard/addpost', async (req, res) => {
  try {
    res.render('addpost', { loggedIn: req.session.loggedIn });
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
