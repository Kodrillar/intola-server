const express = require('express');
const router = express.Router()
const auth = require('../../middleware/auth');
const handleAsyncError = require('../../middleware/async-error-handler');
const {addShippingController} = require('./shipping.controller');

router.post('/', auth, handleAsyncError(addShippingController))

module.exports = router;