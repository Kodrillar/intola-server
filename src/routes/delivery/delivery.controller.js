const deliveryModel = require('../../models/delivery.model')
const imgurClient = require('../../services/imgur-client');


const fetchDeliveryController =  async(req, res)=>{

    const deliveries = await deliveryModel.fetchDeliveries();
    if(!deliveries.rowLength) return res.status(404).json({"msg":"Delivery not found"});

    res.json(deliveries.rows);

};

const addDeliveryController = async(req, res)=>{
    
    const {email} = req.user
    const {weight, price,description,location,contact} = req.body;

    if(!weight || !price || !description || !location || !contact ) return res.status(400).json({"msg":"request body can't be empty"});
    await deliveryModel.addDelivery(email, weight, price, description, location, contact);
   
    res.json({"msg":"success"});
};

const updateDeliveryController = async(req, res)=>{

    const {email} = req.user;

    const deliveryData =  await deliveryModel.fetchDelivery(email);
    if(!deliveryData.rowLength) return res.status(404).json({"msg":"Delivery not found"});
    const deliveryId = deliveryData.first().id;

    const imageData =  await imgurClient.upload({
        image: req.files.image.data,
        type: "stream"
    });

    const imagePath = imageData.data.link;
    await deliveryModel.updateDelivery(email, imagePath, deliveryId);
    res.send({"msg":"success"});

}


module.exports = {
    addDeliveryController,
    fetchDeliveryController,
    updateDeliveryController,
}
