const Contact = require('../models/contactModel');

const postMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message saved successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { postMessage };
