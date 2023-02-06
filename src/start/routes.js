const express = require("express");
const error = require("../middleware/error-handler");
const appRoute = require('../routes/app-route');
const appRouteV1 = require('../routes/v1/app-route');
const path = require('path')

module.exports = function(app){

app.use(express.json())
app.use("/api/v2/uploads", express.static(path.join(__dirname, '..', 'uploads')));
app.use('/api/v2', appRoute);
app.use('/api', appRouteV1);

app.use(error)

}
