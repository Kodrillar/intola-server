const client = require('../services/astra-db-client')();


const addDelivery = async (email, weight, price, description, location, contact)=>
{
    const addDeliveryQuery = "INSERT INTO delivery_by_user(id, email, image, weight, price, description, location, contact) VALUES(now(), ?,'https://i.imgur.com/OJYnvEi.jpg',?,?,?,?,?)";
    await(await client).execute(addDeliveryQuery, [email, weight, price, description,location, contact]);
    
}

const fetchDeliveries = async()=>{
    const fetchDeliveriesQuery = "SELECT * FROM delivery_by_user";
    const deliveries = await(await client).execute(fetchDeliveriesQuery);
    return deliveries;
}

const fetchDelivery = async(email)=>{
    const fetchDeliveryQuery = "SELECT * FROM delivery_by_user WHERE email = ?" ;
    const deliveryData = await(await client).execute(fetchDeliveryQuery, [email]);
    return deliveryData;
}

const updateDelivery = async (email, imagePath, deliveryId)=>{
    const updatetDeliveryQuery = "UPDATE delivery_by_user SET image= ? WHERE email = ? and id = ?";
    await(await client).execute(updatetDeliveryQuery,[imagePath, email, deliveryId ]);
    
}




module.exports = {
    addDelivery,
    fetchDeliveries,
    updateDelivery,
    fetchDelivery,
}
