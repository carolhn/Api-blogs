const postService = require('../services/post.service');

const postAll = async (req, res) => {
    const tableAll = await postService.postAll();

    return res.status(200).json(tableAll);
};

module.exports = { postAll };