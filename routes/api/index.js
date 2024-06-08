// Creates router
const router = require('express').Router();

// Imports user and thought routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Defines endpointsfor routes
router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes);

// Exports router
module.exports = router;