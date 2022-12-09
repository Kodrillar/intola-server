
const {ImgurClient}  = require("imgur");
const env = require("../environment/env");

const imgurClient = new ImgurClient({
    clientId: env.IMGUR_CLIENT_ID,
});


module.exports = imgurClient;
