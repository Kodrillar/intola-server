const express = require('express');
const router = express.Router();
const handleAsyncError = require('../../middleware/async-error-handler');
const validateRequest = require('../../middleware/request-validator');
const {validateSignInRequest, validateSignUpRequest} = require('../../models/auth.model');
const {signInController, signUpController} = require('./auth.controller');

router.post('/sign-in', validateRequest(validateSignInRequest) , handleAsyncError(signInController));
router.post('/sign-up', validateRequest(validateSignUpRequest), handleAsyncError(signUpController));

module.exports = router;
