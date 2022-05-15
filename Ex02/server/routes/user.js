const express = require('express');
const router = express.Router();
const { checkAuth } = require('../middlewares/checkAuth');
const { findUser, currentUser, updateUser, deleteUser, updatePassword } = require('../services/user');

router.post('/:id', checkAuth("get user info"), async(req, res, next) => {
    const { id } = req.params;
    //find detail info user
    await findUser(id, req, res);
})

router.get('/me', checkAuth("get user info"), async(req, res, next) => {
    //find detail info user
    await currentUser(req, res);
})
router.put('/update', checkAuth("update user"), async(req, res, next) => {
    //update username and last name
    await updateUser(req.body, req, res);
})
router.put('/update-password', checkAuth("update password"), async(req, res, next) => {
    //update username and last name
    await updatePassword(req.body, req, res);
})
router.delete('/delete', checkAuth("delete user"), async(req, res, next) => {
    //delete current user
    await deleteUser(req, res);
})
module.exports = router;