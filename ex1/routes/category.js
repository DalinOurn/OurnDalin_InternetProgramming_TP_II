const express = require('express');
const { findAllCategory, create, findById, update, remove } = require('../services/category');
const router = express.Router();

router.post('/add', async(req, res, next) => {
    await create(req.body, req, res);
})
router.get('/all', async(req, res, next) => {
    await findAllCategory(req, res);
})
router.post('/find-by-id', async(req, res, next) => {
    await findById(req.body, req, res);
})
router.post('/update', async(req, res, next) => {
    await update(req.body, req, res);
})
router.delete('/remove', async(req, res, next) => {
    await remove(req.body, req, res);
})

module.exports = router;