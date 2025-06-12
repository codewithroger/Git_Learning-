const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

// Create new user
router.post("/user", async (req, res) => {
  try {
    const { first, last } = req.body; // fixed spelling
    const user = new User({ first, last });
    await user.save(); // await saving
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message }); // fixed missing error param
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
    }
});

module.exports = router;
