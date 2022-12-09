const donationModel = require('../../models/donation.model');

const fetchDonationController = async (req, res)=>{

    const donations = await donationModel.fetchDonations();
    if(!donations.rowLength) return res.status(404).json({msg:"donations not found"});
    res.json(donations.rows);

}

const addDonationController = async( req, res)=>{
    //TODO: validate request body
    const {email} = req.user;

    const { image, name, price, description,quantity,spotsleft } = req.body;

    await donationModel.addDonation(email, image, name, price, description, quantity, spotsleft);
    res.json({msg:"success"});
}

const updateDonationController = async(req, res) =>{

    const {email} = req.user;
    //TODO: update spotsleft - should be updated on server not client
    const {id, spotsleft} = req.body;

    await donationModel.updateDonation(email, id, spotsleft);
    res.json({msg:"success"});

}

module.exports = {
    fetchDonationController,
    addDonationController,
    updateDonationController,
}