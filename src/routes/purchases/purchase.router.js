const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const validateRequest = require('../../middleware/request-validator');
const handleAsyncError = require('../../middleware/async-error-handler');
const {fetchPurchaseController, addPurchaseController} = require('./purchase.controller');
const {validateAddPurchaseRequest} = require('../../models/purchase.model');

router.get('/', auth, handleAsyncError(fetchPurchaseController));
router.post('/', auth, validateRequest(validateAddPurchaseRequest), handleAsyncError(addPurchaseController))

module.exports = router;