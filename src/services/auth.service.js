const { User } = require('../models');
const jwt = require('../utils/jwt');

const auth = async (email, password) => {
    const user = await User.findOne({
    where: { email, password } });

    if (!user || user.password !== password) {
        return { type: 400, message: 'Invalid fields' };
    }

    const token = jwt.createToken(user.data);
    return { type: null, message: token };
};

module.exports = {
    auth,
  };