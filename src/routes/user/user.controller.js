const userModel = require('../../models/user.model');


const fetchUserController = async (req, res)=>{

    const {email} = req.params;

    const user = await userModel.findUser(email);
    if(!user.rowLength) return res.status(404)
        .json({
            userAlreadyExist: false, 
            msg:"User not found!"
        });

    res.json({
        user: {
            email:user.first().email, 
            fullname:user.first().fullname,
        },
        userAlreadyExist:true, 
        msg:"success"
    })
}

const deleteUserController = async (req, res)=>{
    const {email} = req.user;
    await userModel.deleteUser(email);
    res.json({
        msg:"success"
    })
}

module.exports = {
    fetchUserController,
    deleteUserController
}