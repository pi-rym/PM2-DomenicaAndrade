const renderCards = require("./renderCards");
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';
const MOVIES_ENDPOINT = '/movies';

const getMovies = async () => {
  try{
    const response = await axios.get(`${SERVER_URL}${MOVIES_ENDPOINT}`);
    return response.data;
  } catch (error){
    console.error('Error al obtener las peliculas:', error);
    throw error;
  }
};

export default getMovies;

// const getFilms = async () => {
//   try {
//     const { data } = await axios.get('mongodb+srv://daa71428:diPb1n5RA6oaRZ7U@movie.2b6eshp.mongodb.net/movie?retryWrites=true&w=majority&')
//     console.log(data);
//     data.forEach(renderFilms);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// module.exports = getFilms;