const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const { type, message } = await categoryService.createCategory(name);

    if (type) return res.status(type).json({ message });

    return res.status(201).json(message);
};

const categoryAll = async (req, res) => {
   const category = await categoryService.categoryAll();
   return res.status(200).json(category);
};

module.exports = { 
    createCategory,
    categoryAll,
};