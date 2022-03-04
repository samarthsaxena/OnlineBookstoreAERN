const router = require('express').Router();

const { request } = require('express');
const bookstall = require('./bookstall');

router.get("/", (req, res) => {
    res.send("<h2>Welcome to home page</h2>");
})
// If requested resource is /api then it wil be routed to bookstall.js
router.use("/api", bookstall);

module.exports = router;
