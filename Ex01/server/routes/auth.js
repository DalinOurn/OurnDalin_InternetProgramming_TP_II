const express = require('express');
const { joiValidation } = require('../middlewares/joiValidate');
const { registerSchema, loginSchema } = require('../schemas');
const { login } = require('../services/login');
const { register } = require('../services/register');
const router = express.Router();
const { checkAuth } = require('../middlewares/checkAuth');
const { findAuth } = require('../middlewares/findAuth');

router.post('/login', findAuth("sign in"), joiValidation(loginSchema), async(req, res, next) => {
    const { email, password } = req.body;
    await login(email, password, req, res);
})

router.post('/logout', checkAuth("Sign out"), async(req, res, next) => {
    //delete Cookie
    res.status(200).clearCookie('access_token').json({ status: "True", message: "Log out successful" })
})
router.post('/register', findAuth("register"), joiValidation(registerSchema), async(req, res, next) => {
    await register(req.body, res)
})
module.exports = router;