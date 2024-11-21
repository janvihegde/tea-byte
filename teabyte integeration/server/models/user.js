const db = require('../config/db');

const User = {
  getAllUsers: async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  },
  addUser: async (userData) => {
    const { name, email, password } = userData;
    const result = await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [
      name,
      email,
      password,
    ]);
    return result[0];
  },
};

module.exports = User;