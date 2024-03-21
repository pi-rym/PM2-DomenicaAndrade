const router = require('express').Router();
const movieController = require('../controllers/movieController');

router.get('/movies', movieController);

module.exports = router;