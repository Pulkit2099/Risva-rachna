const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simulated user data (in-memory storage)
const users = [
  { username: 'pulkit123', password: 'password123' },
  { username: 'pulkit456', password: 'qwerty' },
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate username
  if (!isAlphanumeric(username) || username.length < 6 || username.length > 12) {
    return res.status(400).json({ error: 'Invalid username' });
  }

  // Validate password
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password should be at least 6 characters long' });
  }

  // Check if user exists
  const user = users.find((u) => u.username === username);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Successful login
  return res.json({ message: 'Login successful' });
});

// Utility function to check if a string is alphanumeric
function isAlphanumeric(str) {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(str);
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
