const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const handleAsyncError = require('../../middleware/async-error-handler');
const {fetchDonationController, addDonationController, updateDonationController} = require('./donation.controller');

router.get('/', auth, handleAsyncError(fetchDonationController));
router.post('/', auth, handleAsyncError(addDonationController));
router.put('/', auth, handleAsyncError(updateDonationController));

module.exports = router;