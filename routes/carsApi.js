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

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    try {
        const car = await db("cars-specs").where("carID", id).first();

        res.status(200).json(car);
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const newCar = req.body;

    if (!newCar.VIN || !newCar.make || !newCar.model || !newCar.mileage) {
        res.status(400).json({ message: "Please include values at least for VIN, make, model, and mileage!"})
    }

    try {
        const [carID] = await db("cars-specs").insert(newCar);

        res.status(201).json(await db('cars-specs').where('carID', carID).first());
    } catch(err) {
        next(err)
    }
})
module.exports = router