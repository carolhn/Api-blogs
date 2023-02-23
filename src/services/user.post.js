const { User } = require('../models');
const jwt = require('../utils/jwt');
const { validateSchema } = require('./validate/validate.user.post');

const createUser = async (displayName, email, password, image) => {
    const error = await validateSchema({ displayName, email, password, image });
    if (error) {
        return { type: 400, message: error.message };
    }
    
    const user = await User.findOne({ where: { displayName, email, password, image } });
    
    if (user) return { type: 409, message: 'User already registered' };

    const newUser = await User.create({ displayName, email, password, image });

    const token = jwt.createToken(newUser);
    return { type: null, message: token };
};

module.exports = {
    createUser,
  };