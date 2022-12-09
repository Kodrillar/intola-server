const express = require('express');
const router = express();
const auth = require('../../middleware/auth');
const asyncErrorHandler = require('../../middleware/async-error-handler');

const { addDeliveryController,
        fetchDeliveryController, 
        updateDeliveryController
    } = require('./delivery.controller');


router.post('/', auth, asyncErrorHandler(addDeliveryController));
router.get('/', auth, asyncErrorHandler(fetchDeliveryController));
router.patch('/', auth, asyncErrorHandler(updateDeliveryController));


module.exports = router;