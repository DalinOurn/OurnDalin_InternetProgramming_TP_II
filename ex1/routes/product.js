const express = require('express');
const { create, productInEachItem, productById, removeById, update } = require('../services/product');
const router = express.Router();

router.get('/add', async(req, res) => {
    await create(req.body, req, res);
})

router.get('/each-item', async(req, res) => {
    await productInEachItem(req.body, req, res);
})
router.get('/id', async(req, res) => {
    await productById(req.body, req, res);
})
router.delete('/delete', async(req, res) => {
    await removeById(req.body, req, res);
})
router.put('/update', async(req, res) => {
    await update(req.body, req, res);
})

module.exports = router;