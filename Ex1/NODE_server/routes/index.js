
const express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { signInSchema, signUpSchema } = require('../schema');
var router = express.Router();
const { login } = require('../services/login');
const { register } = require('../services/register');
const { createAsessionToken } = require('../services/utils');
const userService = require('../services/userid');
const { logout } = require('../services/logout');


//import service

router.get('/me', auth.ensureSignedIn,auth.currentUser, async function (req, res) {
   
    console.log(req);
    
    const { currentUser } = req;

    const result = await userService.findById(currentUser?._id);
    res.json(result);

});



router.get('/user/:id', auth.ensureSignedIn, async function (req, res, next) {
    const { id } = req.params;
    const result = await userService.findById(id);
    res.json(result);
});

router.post('/logout', auth.ensureSignedIn, async (req, res) => {

    //console.log(req.session.jwt);
    const result = logout(req.session);
    
    res.json(result);

});

router.post('/login', auth.ensureSignedOut, joiValidation(signInSchema), async (req, res, next) => {

    const { email, password } = req.body;
    const user = await login(email, password);
    
    req.session.jwt = user?.data?.token;
    res.json(user);

});


router.post('/register', auth.ensureSignedOut,joiValidation(signUpSchema), async (req, res, next) => {

    const createdUser = await register(req.body); 
    res.json(createdUser);

});

module.exports = router;