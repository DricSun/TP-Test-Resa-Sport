function validateReservation(reservation) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return (
        typeof reservation.memberId === 'number' &&
        typeof reservation.gymId === 'number' &&
        typeof reservation.machineId === 'number' &&
        dateRegex.test(reservation.date)
    );
}

module.exports = { validateReservation };