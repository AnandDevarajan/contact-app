const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../model/User');

//@route    GET   api/auth
//@description  get logged in user
//@access       private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});
//@route    POST   api/auth
//@description  auth user and get token
//@access       public
router.post(
  '/',
  [
    body('email', 'Email invalid').isEmail(),
    body('password', 'password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          message: 'User not found',
        });
      }
      const isPassMatch = await bcrypt.compare(password, user.password);
      if (!isPassMatch) {
        return res.status(400).json({
          message: "Email and Password doesn't match",
        });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token: `bearer ${token}`,
          });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
