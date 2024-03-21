//const { getAllMovies, createMovie } = require("../services/movieService");
const movieService = require("../services/movieService");

const movieController = async (req, res) => {
    try {
        const response = await movieService.getAllMovies();
        console.log(response);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getAllMovies = async (req, res) => {
    try {
        const response = await movieService.getAllMovies();
        console.log(response);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
}

const createMovie = async (req, res) => {
    try {
        const { title, year, director, duration, rate, poster } = req.body;
        let { genre } = req.body;

        
        if (typeof genre === 'string') {
            genre = JSON.parse(genre);
        }

        const newMovie = await movieService.createMovie({ title, year, director, duration, genre, rate, poster });

       
        res.status(201).json({ message: "Película creada correctamente", data: newMovie });
    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
};
 module.exports = {
    getAllMovies,
    createMovie
 };