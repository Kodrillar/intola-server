const authModel = require('../../models/auth.model');
const { jsonwebtoken } = require('../../utils/webToken');


const signInController = async (req, res)=>{

    const {email, password} = req.body;

    const user = await authModel.findUser(email);
    if(!user.rowLength) return res.status(404).json({userAlreadyExist:false, msg:"User not found!"});

    if(user.first().password !== password) return res.status(400)
    .json({ 
        "wrongPassword":true,
        "userAlreadyExist":true,
        "msg":"Wrong/Invalid password"
    });

    const webToken = jsonwebtoken(email, user.first().fullname);

    res.json({
        userAlreadyExist:true,
        msg:"success",
        token: webToken, 
        wrongPassword:false
        });

};


const signUpController = async (req, res)=>{

    const {email, fullname, password} = req.body;
    const user = await authModel.findUser(email);

    if(user.rowLength) return res.status(400)
        .json({
            "userAlreadyExist":true, 
            "msg":"User already exist!"
        });
    
    await authModel.createUser(email, fullname, password);
    const webToken = jsonwebtoken(email, fullname);

    res.status(201).json({
        userAlreadyExist: false,
            token: webToken,
            msg:"user created successfully!"
        });

}



module.exports = {
    signInController,
    signUpController,
}