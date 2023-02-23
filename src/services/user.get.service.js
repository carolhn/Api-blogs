const { User } = require('../models');

const userAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  };

  const userId = async (id) => {
   const usersId = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

   if (!usersId) {
    return { type: 404, message: 'User does not exist' };
   }
   
   return { type: null, message: usersId };
 };

  module.exports = {
     userAll,
     userId,
  };