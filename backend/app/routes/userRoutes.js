const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');

router.post('/createUser', userController.createUser);
router.get('/fetchUsers', userController.fetchUsers);
router.get('/fetchUser/:id', userController.fetchUser);
router.patch('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;