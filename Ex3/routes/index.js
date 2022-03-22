const express = require('express');
const router = express.Router();
const { login } = require('../services/login');
const { register } = require('../services/register');
const joiValidation = require('../middlewares/joiValidation');
const { loginSchema, registerSchema } = require('../schemas');
const auth = require('../middlewares/checkauth');
const { createAsessionToken } = require('../services/utils');
const userServer = require('../services/userid');
const { logout } = require('../services/logout');

router.get('/user/:id', auth.ensureSignedIn, async function (req, res, next) {
    const { id } = req.params;
    const result = await userServer.findById(id);
    res.json(result);
});


router.post('/logout', auth.ensureSignedIn, async (req, res) => {

    const result = logout(req.session);
    res.json(result);

});

router.post('/login', auth.ensureSignedOut, joiValidation(loginSchema), async (req, res, next) => {

    const { email, password } = req.body;
    const user = await login(email, password);

    const token = createAsessionToken(user?._id, user?.email);
    req.session.jwt = token;
    res.json(user);

});

router.post('/register', auth.ensureSignedOut,joiValidation(registerSchema), async (req, res, next) => {

    const createdUser = await register(req.body); 
    res.json(createdUser);
});


module.exports = router;