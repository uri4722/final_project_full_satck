const express = require('express');
const login = require('./function/login');
const router = express.Router();



router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    try {
        const user = await login(userName, password)
        res.status(200).json(user);
    } catch (error) {
        res.status(401).send(error);
    }
    res.end()
})

router.get('/posts/userId=:userId', async (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    res.end()
})

module.exports = router;

