const express = require('express');
const memberController = require('./controllers/memberController');
const reservationController = require('./controllers/reservationController');
const router = express.Router();

router.post('/register', memberController.registerMember);
router.post('/reserve', reservationController.createReservation);

module.exports = router;