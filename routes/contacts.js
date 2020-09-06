const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contacts');

//get all contacts
router.get('/contacts', contactController.list);

//get one contact with id
router.get('/contacts/:id', contactController.show);

//post contact
router.post('/contacts', contactController.create);


module.exports = router;