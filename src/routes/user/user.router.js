const express = require('express');
const router = express.Router();
const {fetchUserController} = require('./user.controller');

router.get('/:email', fetchUserController );

module.exports = router;