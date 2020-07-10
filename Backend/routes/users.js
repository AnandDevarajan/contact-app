const express = require('express');
const router = express.Router();

//@route    POST    api/users
//@description  to register a user
//@access       public
router.post('/', (req, res) => {
  res.send('User registered');
});

module.exports = router;
