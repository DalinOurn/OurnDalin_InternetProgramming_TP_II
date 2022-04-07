const express = require('express');
const { joiValidation } = require('../middlewares/joiValidation');
const { registerSchema, loginSchema } = require('../schemas');
const { login } = require('../services/logIn');
const { register } = require('../services/register');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const { findAuth } = require('../middlewares/findAuth');
const { findUser, currentUser, updateUser, deleteUser, updatePassword } = require('../services/user');

router.post('/login', findAuth("sign in"), joiValidation(loginSchema), async(req, res, next) => {
    const { email, password } = req.body;
    await login(email, password, req, res);
})

router.post('/logout', auth("Sign out"), async(req, res, next) => {
    res.status(200).clearCookie('access_token').json({ status: "True", message: "Log out successfully" })
})
router.post('/user/:id', auth("get user info"), async(req, res, next) => {
    const { id } = req.params;
    await findUser(id, req, res);
})

router.post('/me', auth("get user info"), async(req, res, next) => {
    await currentUser(req, res);
})

//update username, last name and username
router.post('/update-user', auth("update user"), async(req, res, next) => {
    await updateUser(req.body, req, res);
})
router.post('/update-password', auth("update password"), async(req, res, next) => {
    await updatePassword(req.body, req, res);
})
router.post('/delete-user', auth("delete user"), async(req, res, next) => {
    await deleteUser(req, res);
})
router.post('/register', findAuth("register"), joiValidation(registerSchema), async(req, res, next) => {
    await register(req.body, res)
})

module.exports = router;