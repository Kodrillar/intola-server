const express = require('express');
const router = express.Router();
const {fetchUserController, deleteUserController} = require('./user.controller');
const auth = require('../../middleware/auth');
const handleAsyncError = require('../../middleware/async-error-handler');

router.get('/:email', fetchUserController );
router.delete('/', auth, handleAsyncError(deleteUserController));
module.exports = router;