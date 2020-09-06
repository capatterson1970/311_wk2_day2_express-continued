const express = require('express');
const router = express.Router();

const vehiclesController = require('../controllers/vehicles')

//get all vehicles
router.get('/vehicles', vehiclesController.list)

//get one vehicle with id
router.get('/vehicles/:id', vehiclesController.show)

//post vehicle
router.post('/vehicles', vehiclesController.create)

module.exports = router