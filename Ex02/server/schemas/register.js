const Joi = require('joi');
module.exports = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    // repeat_password: Joi.ref('password'),
}) /*.with('password', 'repeat_password')*/ ;