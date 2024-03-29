const express = require("express");
const router = express.Router();
const client = require("../../services/astra-db-client")();
const auth = require("../../middleware/auth");
const asyncErrorHandler = require("../../middleware/async-error-handler");


//get all donations
// router.get("/", auth, asyncErrorHandler(async (req, res)=>{

//     const getDonationsQuery = "SELECT * FROM donations_by_user";
//     const getDonations = await(await client).execute(getDonationsQuery);
//     if(!getDonations.rowLength) return res.status(404).json({"msg":"donations not found"});
//     res.send(getDonations.rows);

// }));

//donate
router.post("/donate", auth, asyncErrorHandler(async(req, res)=>{
    
    const {email} = req.user;
    const { image, name, price, description,quantity,spotsleft } = req.body;
    
    const donateQuery = "INSERT INTO donations_by_user(id, email,image, name, price, description, quantity, spotsleft) VALUES(now(), ?,?,?,?,?,?,?)";
    const donate = await (await client).execute(donateQuery, [email, image, name, price, description, quantity,spotsleft]);
    res.json({"msg":"success"});
    
}));

//update spotsLeft

router.put('/', auth , asyncErrorHandler(async(req, res)=>{

    const {email} = req.user;
    const {id, spotsleft} = req.body;
    console.log(id);
    const updateQuery = `UPDATE donations_by_user SET spotsleft ='${spotsleft}'  WHERE email = '${email}' AND id = ${id}`;
    const updateDonation = await(await client).execute(updateQuery);
    res.json({"msg":"success"});
}))


module.exports = router;