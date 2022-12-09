const purchaseModel = require('../../models/purchase.model');

const addPurchaseController = async (req, res)=>{

    const {email} = req.user;
    //TODO: Validate request body
    if(!req.body.products) return res.status(400).send('request.body.products is required');
    const {products} = req.body;

    await purchaseModel.addPurchase(email, products);
    res.json({msg:"success"});
}



const fetchPurchaseController = async (req, res)=>{
    const {email} = req.user;

    const purchases = await purchaseModel.fetchPurchases(email);
    if (!purchases.rowLength) return res.status(404).json({msg:"purchase not found"});
    res.json({purchase:purchases.rows, msg:"success"});
}


module.exports = {
    addPurchaseController,
    fetchPurchaseController,
}