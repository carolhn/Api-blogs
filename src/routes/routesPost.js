const express = require('express');

const routesPost = express.Router();
const postController = require('../controllers/post.controller');
const { validateToken } = require('../middlewares/auth.login');

routesPost.get('/post', validateToken, postController.postAll);

module.exports = routesPost;