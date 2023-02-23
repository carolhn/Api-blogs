const userPost = require('../services/user.post');

const createUser = async (req, res) => {
    const { displayName, password, image, email } = req.body;
    const { type, message } = await userPost.createUser(
        displayName, email, password, image,
    );

    if (type) {
      return res.status(type).json({ message });
    }

    return res.status(201).json({ token: message });
  };

module.exports = {
    createUser,
  };