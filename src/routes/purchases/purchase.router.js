const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const handleAsyncError = require('../../middleware/async-error-handler');
const {fetchPurchaseController, addPurchaseController} = require('./purchase.controller');

router.get('/', auth, handleAsyncError(fetchPurchaseController));
router.post('/', auth, handleAsyncError(addPurchaseController))

module.exports = router;