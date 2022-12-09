const Joi = require("joi");
const client = require('../services/astra-db-client')();
const userModel = require('../models/user.model');

const findUser = async(email)=>{

    const user = userModel.findUser(email);
    return user;
}

const createUser = async(email, fullname, password)=>{
    const createUserQuery = "INSERT INTO users_by_email (email, fullname, password, created_at) VALUES(?, ?, ?, toTimestamp(now()))";
    await (await client).execute(createUserQuery, [email, fullname, password]); 
}


function validateSignInRequest(requestBody){

    const schema = Joi.object({
        email:Joi.string().max(255).required(),
        password:Joi.string().max(255).required()
    })
    
    return schema.validate(requestBody);
}

function validateSignUpRequest(requestBody){

    const schema = Joi.object({
        fullname: Joi.string().max(255).required(),
        email: Joi.string().max(255).required(),
        password:Joi.string().max(255).required()
    })

    return schema.validate(requestBody);
}

module.exports ={
    findUser,
    createUser,
    validateSignInRequest,
    validateSignUpRequest,
}