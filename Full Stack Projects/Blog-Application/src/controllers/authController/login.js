const User = require('../../models/user.js');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res.cookie('token', token).redirect('/');
  } catch (err) {
    res.render('signIn', { error: err.message });
  }
};

module.exports = login;
