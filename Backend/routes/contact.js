const express = require('express');
const router = express.Router();

//@route    GET   api/contact
//@description  GET all user's contact
//@access       private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route    POST  api/contact
//@description  add new contact
//@access       private
router.post('/', (req, res) => {
  res.send('Added new contact');
});

//@route    PUT api/contact/:id
//@description  update the contact
//@access       private
router.put('/:id', (req, res) => {
  res.send('updated the contact');
});

//@route    DELETE api/contact/:id
//@description  delete the contact
//@access       private
router.delete('/:id', (req, res) => {
  res.send('deleted the contact');
});

module.exports = router;
