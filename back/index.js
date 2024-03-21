const express = require('express');
const app = express();
const conDb = require("./src/config/conDb");
const moviesRoute = require("./src/routes/moviesRoute");
const validationMiddleware = require("./src/utils/validateMiddleware");



app.use(express.json());

app.use(validationMiddleware.validateMovieData);

app.use('/movies', moviesRoute);

// app.get('/movies', async (req, res) => {
//     try {
//         const allMovies = await movieService.getAllMovies();
//         res.json(allMovies);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

conDb()
    .then(() => {
        app.listen(3000, () => {
            console.log("Server listening on port 3000");
        });
    })
    .catch((err) => {
        console.log("Error al conectar la BDD");
    });

module.exports = app;
