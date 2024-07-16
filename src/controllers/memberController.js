const { validateMember } = require('../models/member');

let members = [];

const registerMember = (req, res) => {
  const member = req.body;
  if (validateMember(member)) {
    member.id = members.length + 1;
    members.push(member);
    res.status(201).json({ id: member.id });
  } else {
    res.status(400).json({ error: 'Invalid member data' });
  }
};

module.exports = { registerMember };