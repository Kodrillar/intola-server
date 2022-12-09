module.exports = (validatateRequest)=>{

    return (req, res, next)=>{

        const {error} = validatateRequest(req.body);
        if(error) return res.status(400).json({message: error.message});

        next();
    }
}