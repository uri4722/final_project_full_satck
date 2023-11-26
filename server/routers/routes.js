const express = require('express');
const login = require('./function/login');
const router = express.Router();



router.post('/login', (req, res) => {
    const { userName, password } = req.body;
    login(userName, password)
    res.end()
})


module.exports = router;

