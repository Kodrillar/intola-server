const express = require('express');
const appRoute = express.Router()
const productsRouter = require('./products/product.router');
const deliveryRouter = require('./delivery/delivery.router');
const authRouter = require('./auth/auth.router');
const userRouter = require('./user/user.router');
const donationRouter = require('./donations/donation.router');
const shippingRouter = require('./shipping/shipping.router');
const purchaseRouter = require('./purchases/purchase.router');
const welcomeRouter = require('./welcome.router');


appRoute.use('/products', productsRouter);
appRoute.use('/deliveries', deliveryRouter );
appRoute.use('/auth/', authRouter);
appRoute.use('/users', userRouter);
appRoute.use('/donations', donationRouter);
appRoute.use('/shipping', shippingRouter )
appRoute.use('/purchases', purchaseRouter);
appRoute.use('/', welcomeRouter);

module.exports = appRoute;

