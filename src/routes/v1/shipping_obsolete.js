const express = require("express");
const router = express.Router();
const client = require("../../services/astra-db-client")();
const auth = require("../../middleware/auth");
const asyncErrorHandler = require("../../middleware/async-error-handler");


router.post("/", auth, asyncErrorHandler(async (req, res)=>{

    if(!req.body.apartment_suite || req.body.apartment_suite === null) req.body.apartment_suite = '';
    const {
        email,
        address,
        apartment_suite,
        city,
        country,
        phone,
        zipcode
     } = req.body;

     const shippingQuery = "INSERT INTO shipping_by_user(id, email, address, apartment_suite, city, country, phone, zipcode) VALUES(uuid(), ?,?,?,?,?,?,?)";
     const addShippingAddress = await (await client)
        .execute(shippingQuery,
            [
            email, 
            address, 
            apartment_suite,
            city, country,
            phone,
            zipcode
            ],
        );
    res.json({"msg":"success"});
}))


module.exports = router;