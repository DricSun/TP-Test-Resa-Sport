const { validateReservation } = require('../models/reservation');

let reservations = [];

const createReservation = (req, res) => {
  const reservation = req.body;
  if (validateReservation(reservation)) {
    reservation.id = reservations.length + 1;
    reservations.push(reservation);
    res.status(201).json({ id: reservation.id });
  } else {
    res.status(400).json({ error: 'Invalid reservation data' });
  }
};

module.exports = { createReservation };