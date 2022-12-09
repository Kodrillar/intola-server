const shippingModel = require('../../models/shipping.model');

const addShippingController = async (req, res)=>{

    const {email} = req.user;
    //TODO: validate request body
    if(!req.body.apartment_suite || req.body.apartment_suite === null) req.body.apartment_suite = '';
    const {
        address,
        apartment_suite,
        city,
        country,
        phone,
        zipcode
     } = req.body;

    await shippingModel.addShippingAddress(email,address, apartment_suite, city, country,phone, zipcode )

    res.json({"msg":"success"});
}

module.exports ={
    addShippingController,
}