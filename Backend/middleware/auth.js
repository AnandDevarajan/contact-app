const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  //Get the token from the header
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({
      message: 'ACCESS DENIED',
    });
  }
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({
      msg: 'Token is not valid',
    });
  }
};
