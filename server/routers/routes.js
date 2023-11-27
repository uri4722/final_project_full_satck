const express = require('express');
const login = require('./function/login');
const getPosts = require('./function/getPosts');
const getTodos = require('./function/getTodos');
const getComments = require('./function/getComments');
const router = express.Router();


router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    console.log(name, password);
    try {
        const user = await login(name, password);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(401).send(error);
    }
})

router.get('/posts/userId=:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const posts = await getPosts(userId);
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(401).send(error);
    }
})

router.get('/todos/userId=:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const todos = await getTodos(userId);
        res.status(200).json(todos);
    } catch (error) {
        console.log(error);
        res.status(401).send(error);
    }
})

router.get('/comments/postId=:postId', async (req, res) => {
    const { postId } = req.params;
    try {
        const comments = await getComments(postId);
        res.status(200).json(comments);
    } catch (error) {
        console.log(error);
        res.status(401).send(error);
    }
})

module.exports = router;

