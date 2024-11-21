const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Database query failed' });
  }
};

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.addUser(req.body);
    res.status(201).json({ message: 'User added successfully', id: newUser.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add user' });
  }
};