const joi = require('joi');
module.exports = joi.object({
    email: joi.string()
        .email({ minDomainSegments: 3, tlds: { allow: ['com', 'net','yahoo'] } })
        .required(),
    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
})