// Hardcoded users for the workshop. Real apps store password hashes, never
// the passwords themselves.
var users = [
  { email: 'jack@example.com', password: 'password123' },
  { email: 'lachlan@example.com', password: 'letmein' },
  { email: 'levi@example.com', password: 'hopper1906' }
];

function checkCredentials(email, password) {
  return users.some(function (user) {
    return user.email === email && user.password === password;
  });
}

module.exports = { users: users, checkCredentials: checkCredentials };
