import renderCards from "./renderCards"; 
//const renderCards = require("./renderCards");
//const axios = require("axios");
//const URL = "http://localhost:3000/movies";
const getFilms = require("./handler");

getFilms();

import axios from 'axios';
import { get } from '../../back/src/routes/moviesRoute';
import { response } from '../../back';

axios.get("http://localhost:3000/movies")
    .then(response => {
        renderCards(response.data);
    })
    .catch(error => {
        console.error('Error al obtener las peliculas:', error);
    });






