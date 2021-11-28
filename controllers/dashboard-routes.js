const router = require('express').Router();
const { User, Post } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all info for homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User },],
    });

    const allInfo = postData.map((user) => user.get({ plain: true }));
    res.render('dashboard', { allInfo, loggedIn: req.session.loggedIn });
    console.log(allInfo)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User },],
    });

    const allInfo = [postData.get({ plain: true })];
    res.render('dashboard', { allInfo, loggedIn: req.session.loggedIn });
    console.log(allInfo)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
// router.get('/painting/:id', withAuth, async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
