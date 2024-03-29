const express = require("express");
const router = express.Router();
const client = require("../../services/astra-db-client")();
const {jsonwebtoken} = require("../../utils/webToken");
const asyncErrorHandler = require("../../middleware/async-error-handler")

router.post("/", asyncErrorHandler( async (req, res)=>{

    const {email, fullname, password} = req.body;
    if(!email || !password || !fullname) return res.status(400).send("Request body can't be empty");

    const findUserQuery = "SELECT email FROM users_by_email WHERE email= ?";
    let user = await (await client).execute(findUserQuery, [email]); 
    if(user.rowLength) return res.status(400)
        .json({
            "userAlreadyExist":true, 
            "msg":"User already exist!"
        });
   
    const registerUserQuery = "INSERT INTO users_by_email (email, fullname, password, created_at) VALUES(?, ?, ?, toTimestamp(now()))";
    user = await (await client).execute(registerUserQuery, [email, fullname, password]);
    const webToken = jsonwebtoken(email, fullname);

    res.send({
        "userAlreadyExist":false,
         "token":webToken,
          msg:"success"
        });
   
}))








module.exports = router;