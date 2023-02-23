const getService = require('../services/user.get.service');

const userAll = async (_req, res) => {
    const user = await getService.userAll();
    return res.status(200).json(user);
};

const userId = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await getService.userId(id);

    if (type) return res.status(type).json({ message });
    
    return res.status(200).json(message);
};

module.exports = {
    userAll,
    userId,
};