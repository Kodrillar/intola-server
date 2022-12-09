const {Client} = require("cassandra-driver");
const env = require("../environment/env");

module.exports = async function(){

    const client = new Client({
        cloud:{
            secureConnectBundle:"./secure-connect-forintola.zip"
        },
         credentials:{
          username: env.CLIENT_ID,
          password: env.CLIENT_SECRET
      },
    
      keyspace:"intola"
    
    });
    
    await client.connect();

    return client;

}