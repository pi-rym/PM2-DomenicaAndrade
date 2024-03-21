const mongoose = require("mongoose");

const {Schema, model} = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    genre: [String],
    rate: {
        type: Number,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
