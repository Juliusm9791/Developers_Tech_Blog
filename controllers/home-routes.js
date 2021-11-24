const router = require('express').Router();
const { User, Post } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
  //   const userData = await User.findAll({
  //     include: [
  //       {
  //         model: Post,
  //         // attributes: ['filename', 'description'],
  //       },
  //     ],
  //   });

  //   const galleries = userData.map((gallery) =>
  //     gallery.get({ plain: true })
  //   );

    res.render('homepage', {
      // galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
// router.get('/gallery/:id', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.params.id, {
//       include: [
//         {
//           model: Post,
//           // attributes: [
//           //   'id',
//           //   'title',
//           //   'artist',
//           //   'exhibition_date',
//           //   'filename',
//           //   'description',
//           // ],
//         },
//       ],
//     });

//     const gallery = userData.get({ plain: true });
//     res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

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
