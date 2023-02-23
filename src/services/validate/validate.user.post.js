const Joi = require('joi');

const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    image: Joi.string(),
});

    const validateSchema = async (object) => {
    const { error } = await schema.validate(object);
    return error;
    };

module.exports = {
    validateSchema,
};