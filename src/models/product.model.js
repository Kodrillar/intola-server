const client = require('../services/astra-db-client')()


module.exports =  async(category)=>{

    const query = "SELECT * FROM products_by_category WHERE category = ?";
    const products = await (await client).execute(query, [category]);
    return products;
}
