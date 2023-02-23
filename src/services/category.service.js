const { Category } = require('../models');

const createCategory = async (name) => {
    if (!name) return { type: 400, message: '"name" is required' };
    
    const category = await Category.create({ name });
    return { type: null, message: category };
};

const categoryAll = async () => {
    const category = await Category.findAll();
    return category;
};

module.exports = {
    createCategory,
    categoryAll,
};