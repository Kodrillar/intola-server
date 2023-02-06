const express = require("express");
const router = express.Router();
const client = require("../../services/astra-db-client")(); 
const auth = require("../../middleware/auth")
const asyncErrorHanlder =require("../../middleware/async-error-handler");

router.get("/:category", auth, asyncErrorHanlder(async(req, res)=>{

   
    const {category} = req.params;

    const query = "SELECT * FROM products_by_category WHERE category = ?";
    let products = await (await client).execute(query, [category]);
    if(!products.rowLength) return res.status(404).json({"msg":"product not found"});
    res.send(products.rows);
}));


module.exports = router;