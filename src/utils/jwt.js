const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'a1b2c3';

const configJwc = { expiresIn: '1m', algorithm: 'HS256' };

const createToken = (payload) => jwt.sign({ data: { ...payload } }, JWT_SECRET, configJwc);

module.exports = {
    createToken,
};