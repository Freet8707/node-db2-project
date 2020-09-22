const express = require('express');

const carsApi = require('./routes/carsApi');

const server = express();

server.use(express.json());

server.use('/api/cars', carsApi)

module.exports = server;