const express = require('express');
const appRoute = express.Router();
const user = require('../v1/user_obsolete');
const auth = require("../v1/auth_obsolete");
const products = require("../v1/product_obsolete");
const donations = require("../v1/donation_obsolete");
const shipping = require("../v1/shipping_obsolete");
const delivery = require("../v1/delivery_obsolete");
const purchase = require("../v1/purchase_obsolete");
const path = require('path')

appRoute.use((req, res, next)=>{ res.json({msg:'Kindly update your app to the latest version.'})})
appRoute.use("/uploads", express.static(path.join(__dirname, '..', '..', 'uploads')));
appRoute.use("/user/register", user);
appRoute.use("/user/auth", auth );
appRoute.use("/products", products);
appRoute.use("/donations", donations);
appRoute.use("/shipping", shipping);
appRoute.use("/delivery", delivery);
appRoute.use("/purchase", purchase);


module.exports = appRoute;