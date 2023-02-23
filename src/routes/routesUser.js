const express = require('express');

const routeUser = express.Router();

const userPost = require('../controllers/user.post');
 const { authLogin } = require('../middlewares/auth.login');
 const userGet = require('../controllers/user.get.controller');
 const { validateToken } = require('../middlewares/auth.login');

routeUser.post('/user', authLogin, userPost.createUser);
routeUser.get('/user', validateToken, userGet.userAll);
routeUser.get('/user/:id', validateToken, userGet.userId);

module.exports = routeUser;
