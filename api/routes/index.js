const router = require('express').Router();

const bookstall = require('./bookstall');

// If requested resource is /api then it wil be routed to bookstall.js
router.use("/api", bookstall);

module.exports = router;
