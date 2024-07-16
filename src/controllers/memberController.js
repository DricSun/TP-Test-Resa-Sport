const { validateMember } = require('../models/member');

let members = [];

const registerMember = (req, res) => {
  const member = req.body;
  console.log('Received member data:', member); // Log pour débogage
  if (validateMember(member)) {
    member.id = members.length + 1;
    members.push(member);
    res.status(201).json({ id: member.id });
  } else {
    console.log('Validation failed for member data:', member); // Log pour débogage
    res.status(400).json({ error: 'Invalid member data' });
  }
};

module.exports = { registerMember };
