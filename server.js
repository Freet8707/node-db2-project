const express = require('express');

const carsApi = require('./routes/carsApi');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send('<h1>Server up and running ! hype !</h1>')
})

server.use('/api/cars', carsApi)

module.exports = server;