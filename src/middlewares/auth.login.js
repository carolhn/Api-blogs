const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'a1b2c3';

// criação do token
const authLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (email === '' || password === '') {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    return next();
};

// criação da validação do token
const validateToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    
    try {
        const result = await jwt.verify(authorization, JWT_SECRET);
        req.user = result.data.dataValues;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    authLogin,
    validateToken,
  };