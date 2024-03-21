const { Movies } = require("../types/class");
const moviesValidation = require("../utils/moviesValidations");
const Movie = require("../models/movie");

const getAllMovies = async () => {
    try {
        const movie = await Movie.find();
        const moviesCollection = movie.map((movie) => {
             if(moviesValidation(movie)){
                 return new Movies(movie);
             }
        });
        return moviesCollection;
    } catch (error) {
        throw Error(error.message);
    }
};

const createMovie = async (movieData) => {
    try {
        const newMovie = new Movie(movieData);
        await newMovie.save();
        return newMovie;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAllMovies,
    createMovie
};