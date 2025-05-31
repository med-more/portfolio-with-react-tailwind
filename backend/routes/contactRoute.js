const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { postMessage } = require('../controllers/contactController');

router.post(
  '/contact',
  [
    body('name').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('message').isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  ],
  postMessage
);

module.exports = router;
