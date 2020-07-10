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
router.post(
  '/',
  [auth, [body('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }
    const { name, email, phone, type } = req.body;
    try {
      const contact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      await contact.save();
      res.json(contact);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route    PUT api/contact/:id
//@description  update the contact
//@access       private
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: 'ACCESS DENIED',
      });
    }
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    console.log(error.message);
    res.status(500).json()
    
  }
});

//@route    DELETE api/contact/:id
//@description  delete the contact
//@access       private
router.delete('/:id', (req, res) => {
  res.send('deleted the contact');
});

module.exports = router;
