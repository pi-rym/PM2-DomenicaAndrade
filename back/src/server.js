const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');

const app = express();

app.use(router);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

module.exports = app;

