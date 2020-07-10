const express = require('express');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../model/User');
const Contact = require('../model/Contact');
const router = express.Router();

//@route    GET   api/contact
//@description  GET all user's contact
//@access       private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
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
