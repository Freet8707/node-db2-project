const express = require('express');

const db = require('../data/config');

const router = express.Router();

router.get('/',  async (req, res, next) => {
    try {
        res.status(200).json(await db("cars-specs"))
    } catch(err) {
        next(err)
    }
})

module.exports = router