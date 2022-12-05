require("dotenv").config()
const express = require("express");
const app = express();
const http = require("http")
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const fileupload = require("express-fileupload");
const server = http.createServer(app);


app.use(helmet());
app.use(cors());
app.use(fileupload());
app.use(morgan("tiny"));


require("./src/start/logger")();
require('./src/start/routes')(app);

const port =process.env.PORT || 4000;
server.listen(port, ()=>{
    console.log("connected on PORT: " + port);
})

