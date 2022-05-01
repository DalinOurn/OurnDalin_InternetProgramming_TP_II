const express = require('express');
const router = express.Router();
const { checkAuth } = require('../middlewares/checkAuth');
const { findUser, currentUser, updateUser, deleteUser, updatePassword } = require('../services/user');

router.post('/:id', checkAuth("get user info"), async(req, res, next) => {
    const { id } = req.params;
    await findUser(id, req, res);
})

router.get('/me', checkAuth("get user info"), async(req, res, next) => {
    await currentUser(req, res);
})

//update username and last name
router.put('/update', checkAuth("update user"), async(req, res, next) => {
    await updateUser(req.body, req, res);
})

//update username and last name
router.put('/update-password', checkAuth("update password"), async(req, res, next) => {
    await updatePassword(req.body, req, res);
})

//delete current user
router.delete('/delete', checkAuth("delete user"), async(req, res, next) => {
    await deleteUser(req, res);
})

module.exports = router;