const productModel = require('../../models/product.model');

module.exports.fetchProductsController = async (req, res)=>{
    const {category} = req.params;
    const products = await productModel(category);
    if(!products.rowLength) return res.status(404).json({"msg":"product not found"});
    res.json(products.rows);
}