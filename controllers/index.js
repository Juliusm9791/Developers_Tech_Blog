const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');
// const addPostRoutes = require('./addpost-routes.js');
// const addPostRoutes = require('./updatepost-routes.js');

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/dashboard/addpost', addPostRoutes);
router.use('/api', apiRoutes);

module.exports = router;
