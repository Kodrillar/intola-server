const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {fetchProductsController} = require('./product.controller');
const asyncErrorHanlder = require('../../middleware/async-error-handler');

router.get("/:category", auth, asyncErrorHanlder(fetchProductsController));

module.exports = router;