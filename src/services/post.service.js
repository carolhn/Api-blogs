const { BlogPost, User, Category } = require('../models');

const postAll = async () => {
    const tableAll = await BlogPost.findAll({
      //  attributes: ['title', 'content', 'userId', 'published', 'updated'],

        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category,
                as: 'categories',
                attributes: { exclude: ['PostCategory'] },
                through: { attributes: [] } },
            ],
        });
    return tableAll;
};

  module.exports = { postAll };