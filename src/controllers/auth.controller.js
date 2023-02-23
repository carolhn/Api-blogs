const authServices = require('../services/auth.service');

const auth = async (req, res) => {
    const { email, password } = req.body;
    const { type, message } = await authServices.auth(email, password);
    if (type) {
        return res.status(type).json({ message });
    }
    return res.status(200).json({ token: message });
};

module.exports = {
    auth,
  };