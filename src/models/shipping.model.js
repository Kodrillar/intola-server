const client = require('../services/astra-db-client')();


const addShippingAddress = async (email, address, apartment_suite, city, country, phone, zipcode)=>{
    const addShippingQuery = "INSERT INTO shipping_by_user(id, email, address, apartment_suite, city, country, phone, zipcode) VALUES(uuid(), ?,?,?,?,?,?,?)";
   
    await (await client)
        .execute(addShippingQuery,
            [
            email, 
            address, 
            apartment_suite,
            city, 
            country,
            phone,
            zipcode
            ],
        );
}

module.exports = {
    addShippingAddress
}