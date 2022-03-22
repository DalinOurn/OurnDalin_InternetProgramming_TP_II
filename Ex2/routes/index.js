const express = require('express');
const router = express.Router();
const { login } = require('../services/login');
const { register } = require('../services/register');
const joiValidation = require('../middlewares/joiValidation');
const { loginSchema, registerSchema } = require('../schemas');

router.post('/login',joiValidation(loginSchema),async (req, res, next) => {
    const { email, password } = req.body;
    const user = await login(email,password);
    res.json(user);
    
})

router.post('/register',joiValidation(registerSchema), async (req, res, next) => {
    console.log(req.body);
    const createUser = await register(req.body);
    res.json(createUser);
})

module.exports = router;