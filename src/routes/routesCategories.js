const express = require('express');

const routesCategory = express.Router();

const categoryController = require('../controllers/category.controller');
const { validateToken } = require('../middlewares/auth.login');

routesCategory.post('/categories', validateToken, categoryController.createCategory);
routesCategory.get('/categories', validateToken, categoryController.categoryAll);

module.exports = routesCategory;