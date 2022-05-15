const express = require('express');
const { findById, findAllItems, findByCategory, create, deleteItem, updateItem, finditemProduct } = require('../services/items');
const router = express.Router();
router.post('/add', async(req, res) => {
    await create(req.body, req, res);
})
router.post('/id', async(req, res) => {
    await findById(req.body, req, res);
})
router.get('/all', async(req, res) => {
    await findAllItems(req, res);
})
router.post('/by-category', async(req, res) => {
    await findByCategory(req.body, req, res);
})
router.delete('/delete', async(req, res) => {
    await deleteItem(req.body, req, res);
})
router.put('/update', async(req, res) => {
    await updateItem(req.body, req, res);
})

router.get('/product', async(req, res) => {
    await finditemProduct(req, res);
})

module.exports = router;