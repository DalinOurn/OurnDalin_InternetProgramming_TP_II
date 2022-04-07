
const Joi = require('joi');
module.exports = Joi.object({
    password: Joi.string()
        .pattern(new RegExp('^[A-Za-z0-9]{3,30}$')).required(),
    email: Joi.string()
        .email({ minDomainSegments: 3, tlds: { allow: ['com', 'net','yahoo'] } })
});