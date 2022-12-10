const client = require('../services/astra-db-client')();
const Joi = require('joi');

const addPurchase = async(email, products)=>{
    
    const addPurchaseQuery = "INSERT INTO purchases_by_user(email, id, created_at, products) VALUES(?, now(),toTimestamp(now()), ? )";
    await(await client).execute(addPurchaseQuery, [email, products], { prepare: true });
    
}

const fetchPurchases=  async(email)=>{
    const fetchPurchaseQuery = "SELECT * FROM purchases_by_user WHERE email = ?"
    const purchases = await (await client).execute(fetchPurchaseQuery, [email]);
    return purchases;
}


function validateAddPurchaseRequest(requestBody){

    const schema = Joi.object({
        products : Joi.required()
    });

    return schema.validate(requestBody);
}


module.exports = {

    addPurchase,
    fetchPurchases,
    validateAddPurchaseRequest
}