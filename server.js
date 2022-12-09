const http = require('http');
const app = require('./src/app');

const server = http.createServer(app)


const port = process.env.PORT || 4000;

server.listen(port, ()=>{
    console.log(`connected on PORT: ${port}`);
})

module.exports = server;