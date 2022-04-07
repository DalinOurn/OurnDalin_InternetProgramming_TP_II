const joi = require('joi');

module.exports = joi.object ({
    email: joi.string()
        .email({ minDomainSegments: 3, tlds :{ allow: ['come','net','yahoo']}})
        .required(),
    username: joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
})