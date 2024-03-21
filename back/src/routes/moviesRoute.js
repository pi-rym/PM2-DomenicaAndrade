// const { Router } = require('express');
// const movieController = require('../controllers/movieController');


// const moviesRoute = Router();

// moviesRoute.get('/', movieController);

// module.exports = moviesRoute;
const express = require('express');
const { Router } = require('express');
const movieController = require('../controllers/movieController');
//const getAllMovies = require('../controllers/movieController');


const router = express.Router();
router.use('/movies', Router);
router.get('/', movieController.getAllMovies);
router.post('/', movieController.createMovie);

module.exports = router;
