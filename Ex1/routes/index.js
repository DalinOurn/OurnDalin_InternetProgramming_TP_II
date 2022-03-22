const express = require('express');
const router = express.Router();
const { login } = require('../services/login');
const { register } = require('../services/register');

router.post('/', (req, res) => {
    const { email, password } = req.body;
    const result = login(email, password)
    res.json(result);
})

router.post('/register', async function(req, res) {
    const result = await register(req.body);
    res.json(result);
})


router.post('/Home', (req, res) => {
    const { email, password } = req.body;
    const result = login(email, password)
    res.json(result);
})

module.exports = router;