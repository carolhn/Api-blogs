const express = require('express');

const routesLogin = express.Router();

const authController = require('../controllers/auth.controller');
const { authLogin } = require('../middlewares/auth.login');

routesLogin.post('/login', authLogin, authController.auth);

module.exports = routesLogin;